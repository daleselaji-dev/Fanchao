import bpy
import math
import os
from mathutils import Vector


ROOT = r"G:\FanChao\FanChaoProject\prototypes\h00_r0_graybox"
RENDER_DIR = os.path.join(ROOT, "renders")
BLEND_PATH = os.path.join(ROOT, "H00_R0_Graybox.blend")


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for datablocks in (bpy.data.meshes, bpy.data.curves, bpy.data.materials, bpy.data.cameras, bpy.data.lights):
        # Do not remove materials while iterating over objects; this is a disposable graybox file.
        pass


def make_mat(name, color, roughness=0.8, metallic=0.0, emission=None):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = (*color, 1.0)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = (*color, 1.0)
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if emission:
        bsdf.inputs["Emission"].default_value = (*emission, 1.0)
        bsdf.inputs["Emission Strength"].default_value = 1.5
    return mat


def cube(name, location, dimensions, material, bevel=0.0):
    bpy.ops.mesh.primitive_cube_add(location=location)
    obj = bpy.context.object
    obj.name = name
    obj.dimensions = dimensions
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if material:
        obj.data.materials.append(material)
    if bevel:
        mod = obj.modifiers.new("soft_graybox_edges", "BEVEL")
        mod.width = bevel
        mod.segments = 2
    return obj


def cylinder(name, location, radius, depth, material, vertices=32):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices, radius=radius, depth=depth, location=location)
    obj = bpy.context.object
    obj.name = name
    if material:
        obj.data.materials.append(material)
    return obj


def add_wall_x(name, y, x1, x2, height, thickness, material):
    if x2 - x1 <= 0.02:
        return
    cube(name, ((x1 + x2) * 0.5, y, height * 0.5), (x2 - x1, thickness, height), material, 0.03)


def add_wall_y(name, x, y1, y2, height, thickness, material):
    if y2 - y1 <= 0.02:
        return
    cube(name, (x, (y1 + y2) * 0.5, height * 0.5), (thickness, y2 - y1, height), material, 0.03)


def add_horizontal_wall_with_openings(name, y, x1, x2, openings, height, thickness, material):
    cursor = x1
    for index, (open1, open2) in enumerate(sorted(openings)):
        add_wall_x(f"{name}_left_{index}", y, cursor, max(cursor, open1), height, thickness, material)
        cursor = max(cursor, open2)
    add_wall_x(f"{name}_right", y, cursor, x2, height, thickness, material)


def add_vertical_wall_with_openings(name, x, y1, y2, openings, height, thickness, material):
    cursor = y1
    for index, (open1, open2) in enumerate(sorted(openings)):
        add_wall_y(f"{name}_low_{index}", x, cursor, max(cursor, open1), height, thickness, material)
        cursor = max(cursor, open2)
    add_wall_y(f"{name}_high", x, cursor, y2, height, thickness, material)


def room_shell(name, cx, cy, width, depth, floor_mat, wall_mat, north_openings=None, south_openings=None,
               east_openings=None, west_openings=None):
    x1, x2 = cx - width * 0.5, cx + width * 0.5
    y1, y2 = cy - depth * 0.5, cy + depth * 0.5
    cube(f"{name}_floor", (cx, cy, 0.0), (width, depth, 0.12), floor_mat, 0.02)
    add_horizontal_wall_with_openings(f"{name}_north", y2, x1, x2, north_openings or [], 3.0, 0.16, wall_mat)
    add_horizontal_wall_with_openings(f"{name}_south", y1, x1, x2, south_openings or [], 3.0, 0.16, wall_mat)
    add_vertical_wall_with_openings(f"{name}_east", x2, y1, y2, east_openings or [], 3.0, 0.16, wall_mat)
    add_vertical_wall_with_openings(f"{name}_west", x1, y1, y2, west_openings or [], 3.0, 0.16, wall_mat)


def flat_label(text, location, material, size=0.45):
    curve = bpy.data.curves.new(f"label_{text}", type="FONT")
    curve.body = text
    curve.align_x = "CENTER"
    curve.align_y = "CENTER"
    curve.size = size
    curve.extrude = 0.005
    obj = bpy.data.objects.new(f"label_{text}", curve)
    bpy.context.collection.objects.link(obj)
    obj.location = location
    obj.rotation_euler = (0.0, 0.0, 0.0)
    obj.data.materials.append(material)
    return obj


def line_marker(name, start, end, material, width=0.08, z=0.11):
    x1, y1 = start
    x2, y2 = end
    length = math.hypot(x2 - x1, y2 - y1)
    angle = math.atan2(y2 - y1, x2 - x1)
    obj = cube(name, ((x1 + x2) * 0.5, (y1 + y2) * 0.5, z), (length, width, 0.025), material)
    obj.rotation_euler[2] = angle
    return obj


def look_at(obj, target):
    direction = Vector(target) - obj.location
    obj.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()


def add_camera(name, location, target, lens=35, ortho=None):
    data = bpy.data.cameras.new(name)
    camera = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(camera)
    camera.location = location
    data.lens = lens
    if ortho:
        data.type = "ORTHO"
        data.ortho_scale = ortho
    look_at(camera, target)
    return camera


def add_area_light(name, location, energy, size, color):
    data = bpy.data.lights.new(name, type="AREA")
    data.energy = energy
    data.shape = "DISK"
    data.size = size
    data.color = color
    light = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(light)
    light.location = location
    look_at(light, (0.0, 2.0, 0.0))
    return light


def add_table(name, location, material, top_material):
    x, y, z = location
    cylinder(f"{name}_top", (x, y, z + 1.0), 1.15, 0.12, top_material)
    cylinder(f"{name}_column", (x, y, z + 0.5), 0.12, 1.0, material, vertices=16)
    for angle in (0.0, math.pi * 0.5, math.pi, math.pi * 1.5):
        dx, dy = math.cos(angle) * 0.85, math.sin(angle) * 0.85
        cube(f"{name}_chair_{angle:.2f}", (x + dx, y + dy, z + 0.4), (0.45, 0.45, 0.8), material, 0.04)


def add_console(name, location, body_mat, screen_mat):
    x, y, z = location
    cube(f"{name}_body", (x, y, z + 0.5), (1.1, 0.45, 1.0), body_mat, 0.05)
    cube(f"{name}_screen", (x, y - 0.25, z + 0.72), (0.52, 0.04, 0.30), screen_mat, 0.02)
    for i in range(3):
        cylinder(f"{name}_button_{i}", (x - 0.28 + i * 0.28, y - 0.28, z + 0.35), 0.035, 0.04, screen_mat, vertices=12)


def add_worker_proxy(name, location, body_mat, eye_mat):
    x, y, z = location
    cube(f"{name}_torso", (x, y, z + 1.1), (0.55, 0.35, 1.25), body_mat, 0.06)
    cylinder(f"{name}_head", (x, y, z + 1.95), 0.22, 0.35, body_mat, vertices=20)
    cube(f"{name}_tray", (x, y - 0.35, z + 1.15), (0.65, 0.35, 0.06), eye_mat, 0.02)
    cube(f"{name}_leg_l", (x - 0.14, y, z + 0.35), (0.16, 0.16, 0.7), body_mat, 0.02)
    cube(f"{name}_leg_r", (x + 0.14, y, z + 0.35), (0.16, 0.16, 0.7), body_mat, 0.02)


def render(scene, camera, path):
    scene.camera = camera
    scene.render.filepath = path
    bpy.ops.render.render(write_still=True)


def main():
    os.makedirs(RENDER_DIR, exist_ok=True)
    clear_scene()

    mat_floor_a = make_mat("A_warm_floor", (0.24, 0.16, 0.13))
    mat_floor_b = make_mat("B_cool_floor", (0.18, 0.25, 0.24))
    mat_floor_c = make_mat("C_control_floor", (0.20, 0.22, 0.23))
    mat_floor_d = make_mat("D_loading_floor", (0.25, 0.25, 0.22))
    mat_floor_e = make_mat("E_wash_floor", (0.26, 0.29, 0.28), metallic=0.15)
    mat_wall = make_mat("old_plaster_walls", (0.63, 0.59, 0.51))
    mat_wall_cool = make_mat("service_wall", (0.34, 0.42, 0.40))
    mat_wall_c = make_mat("control_wall", (0.27, 0.30, 0.31))
    mat_wall_d = make_mat("loading_wall", (0.42, 0.39, 0.33))
    mat_wall_e = make_mat("wash_wall", (0.42, 0.46, 0.44))
    mat_red = make_mat("wedding_red", (0.42, 0.06, 0.04), roughness=0.62)
    mat_steel = make_mat("old_steel", (0.29, 0.32, 0.31), roughness=0.42, metallic=0.55)
    mat_screen = make_mat("crt_screen", (0.08, 0.24, 0.22), roughness=0.35, emission=(0.02, 0.08, 0.06))
    mat_worker = make_mat("worker_proxy", (0.06, 0.13, 0.14))
    mat_marker = make_mat("route_marker", (0.76, 0.46, 0.08), roughness=0.55)
    mat_low = make_mat("low_route_annotation", (0.30, 0.18, 0.10), roughness=0.9)
    mat_shallow = make_mat("shallow_route_annotation", (0.14, 0.29, 0.25), roughness=0.9)
    mat_text = make_mat("paper_labels", (0.88, 0.77, 0.46), emission=(0.08, 0.04, 0.01))

    # A: public wedding hall, entered from the service door at its south edge.
    room_shell("A_banquet", 0.0, 6.0, 10.0, 5.0, mat_floor_a, mat_wall,
                south_openings=[(-0.9, 0.9)])
    add_table("A_round_table", (-2.0, 6.2, 0.0), mat_steel, mat_red)
    add_table("A_round_table_2", (2.1, 6.8, 0.0), mat_steel, mat_red)
    # The entry is an open service door for the graybox; keep only the frame so
    # the A/B camera can prove the connection instead of staring at a closed slab.
    cube("A_service_door_frame_l", (-0.82, 3.5, 1.45), (0.12, 0.18, 2.7), mat_steel, 0.03)
    cube("A_service_door_frame_r", (0.82, 3.5, 1.45), (0.12, 0.18, 2.7), mat_steel, 0.03)
    cube("A_service_door_frame_top", (0.0, 3.5, 2.78), (1.75, 0.18, 0.12), mat_steel, 0.03)

    # B: a corridor with two lanes represented as design annotations on the floor.
    room_shell("B_service", 0.0, 2.3, 10.0, 2.4, mat_floor_b, mat_wall_cool,
                north_openings=[(-0.9, 0.9), (-5.0, -4.0), (4.0, 5.0)],
                south_openings=[(-4.0, -2.5), (-0.7, 0.7), (2.5, 4.0)])
    cube("B_service_counter", (2.8, 2.65, 1.0), (2.4, 0.45, 1.8), mat_steel, 0.04)
    cube("B_low_lane", (0.0, 1.55, 0.075), (8.8, 0.7, 0.03), mat_low)
    cube("B_shallow_lane", (0.0, 2.85, 0.075), (8.8, 0.7, 0.03), mat_shallow)

    # C: recording/broadcast room.
    room_shell("C_control", -3.25, -0.5, 3.0, 3.2, mat_floor_c, mat_wall_c,
                north_openings=[(-3.9, -2.6)], east_openings=[(-1.0, 0.0)])
    add_console("C_record_console", (-3.25, -0.95, 0.0), mat_steel, mat_screen)
    cube("C_tape_shelf", (-4.25, -0.2, 1.2), (0.22, 1.3, 2.3), mat_steel, 0.03)

    # D: loading door and hard material evidence point.
    room_shell("D_loading", 3.25, -0.5, 3.0, 3.2, mat_floor_d, mat_wall_d,
                north_openings=[(2.6, 3.9)], west_openings=[(-1.0, 0.0)])
    cube("D_rollup_door", (3.25, -2.05, 1.45), (2.2, 0.12, 2.7), mat_steel, 0.03)
    cube("D_dock_edge", (3.25, -1.25, 0.18), (2.7, 0.45, 0.35), mat_steel, 0.03)

    # E: washing/equipment room, the turning point of the old route.
    room_shell("E_wash", 0.0, -0.5, 2.5, 3.2, mat_floor_e, mat_wall_e,
                north_openings=[(-0.7, 0.7)], west_openings=[(-1.0, 0.0)], east_openings=[(-1.0, 0.0)])
    cube("E_sink", (-0.35, -1.0, 0.55), (1.1, 0.42, 0.92), mat_steel, 0.05)
    cube("E_rack", (0.82, 0.65, 1.1), (0.42, 0.35, 2.2), mat_steel, 0.03)

    # Narrow links between C-E and E-D; the loop remains legible but small.
    cube("C_E_link", (-1.45, -0.5, 0.0), (0.5, 1.0, 0.12), mat_floor_b)
    cube("E_D_link", (1.45, -0.5, 0.0), (0.5, 1.0, 0.12), mat_floor_b)

    # Paper-only route and labels; hidden before perspective renders.
    annotation_objects = []
    annotation_objects += [flat_label("A 宴会厅", (0.0, 6.0, 0.1), mat_text, 0.55)]
    annotation_objects += [flat_label("B 服务走廊", (0.0, 2.3, 0.1), mat_text, 0.45)]
    annotation_objects += [flat_label("C 录像/广播", (-3.25, -0.5, 0.1), mat_text, 0.34)]
    annotation_objects += [flat_label("D 卸货口", (3.25, -0.5, 0.1), mat_text, 0.34)]
    annotation_objects += [flat_label("E 洗涤/器材", (0.0, -0.5, 0.1), mat_text, 0.32)]
    annotation_objects += [flat_label("低处路线", (0.0, 1.55, 0.13), mat_text, 0.28)]
    annotation_objects += [flat_label("浅处路线", (0.0, 2.85, 0.13), mat_text, 0.28)]

    marker_objects = []
    marker_objects += [line_marker("route_A_B", (0.0, 3.9), (0.0, 3.1), mat_marker, 0.10)]
    marker_objects += [line_marker("route_B_C", (-2.2, 2.3), (-2.3, 0.8), mat_marker, 0.10)]
    marker_objects += [line_marker("route_C_E", (-1.9, -0.5), (-1.3, -0.5), mat_marker, 0.10)]
    marker_objects += [line_marker("route_E_D", (1.3, -0.5), (1.9, -0.5), mat_marker, 0.10)]
    marker_objects += [line_marker("route_D_B", (3.25, 0.8), (3.8, 1.5), mat_marker, 0.10)]
    marker_objects += [line_marker("route_E_B", (0.0, 1.1), (0.0, 1.65), mat_marker, 0.10)]

    # Proxy worker at D. The proxy is intentionally generic; no formal monster geometry here.
    add_worker_proxy("M01_proxy", (3.25, -0.8, 0.0), mat_worker, mat_steel)

    # Lighting and cameras.
    world = bpy.context.scene.world
    world.color = (0.025, 0.03, 0.03)
    add_area_light("warm_banquet_light", (0.0, 6.0, 6.5), 900.0, 5.0, (1.0, 0.58, 0.36))
    add_area_light("cool_service_light", (0.0, 2.2, 5.0), 700.0, 4.0, (0.55, 0.78, 0.75))
    add_area_light("cold_control_light", (-3.2, -0.5, 4.0), 550.0, 3.0, (0.44, 0.62, 0.66))
    add_area_light("dock_light", (3.2, -0.5, 4.0), 500.0, 3.0, (0.72, 0.68, 0.50))

    topdown = add_camera("CAM_topdown_paper", (0.0, 3.2, 24.0), (0.0, 3.2, 0.0), ortho=18.0)
    # Keep the validation cameras inside the rooms and below the 3m graybox walls;
    # the previous pass looked at wall faces instead of proving the route.
    cam_ab = add_camera("CAM_A_B", (0.0, 2.35, 1.55), (0.0, 5.6, 1.1), lens=30)
    cam_cd = add_camera("CAM_C_door", (-3.25, -1.85, 2.1), (-3.25, -0.75, 0.85), lens=24)
    cam_eb = add_camera("CAM_E_B", (0.85, -0.1, 1.8), (-0.2, -1.0, 0.8), lens=25)

    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 1280
    scene.render.resolution_y = 720
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.film_transparent = False
    scene.view_settings.view_transform = "Filmic"
    scene.view_settings.look = "Medium High Contrast"
    scene.render.filepath = os.path.join(RENDER_DIR, "00_topdown_paper.png")

    render(scene, topdown, os.path.join(RENDER_DIR, "00_topdown_paper.png"))
    for obj in annotation_objects + marker_objects:
        obj.hide_render = True
    render(scene, cam_ab, os.path.join(RENDER_DIR, "01_cam_a_b.png"))
    render(scene, cam_cd, os.path.join(RENDER_DIR, "02_cam_c_door.png"))
    render(scene, cam_eb, os.path.join(RENDER_DIR, "03_cam_e_b.png"))

    # Restore annotations for inspection inside Blender and save the source file.
    for obj in annotation_objects + marker_objects:
        obj.hide_render = False
    scene.camera = topdown
    bpy.ops.wm.save_as_mainfile(filepath=BLEND_PATH)
    print("H00_R0_GRAYBOX_BUILT", BLEND_PATH)
    print("H00_R0_GRAYBOX_RENDERS", RENDER_DIR)


if __name__ == "__main__":
    main()
