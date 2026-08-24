# PROTOTYPE — Wall Volume Transfer

This throwaway prototype answers one question:

> Can a player read that volume pressed into one part of a damp wall reappears elsewhere, while the room loses usable space?

It is not production game code and contains no final art.

## Controls

- `Space` or left mouse: press / advance the event
- `R`: reset
- `Q` / `E`: compare the event from two nearby camera angles
- `Esc`: quit

## One-command workflow on the Windows production machine

```bat
RUN_PROTOTYPE.bat
```

The command regenerates the Blender wall asset, imports it in Godot, and launches the prototype.

## Technical result to record before deleting or absorbing

- Did Blender shape keys survive glTF import?
- Is near indentation plus repaired-seam migration plus remote pockets readable without text?
- Does the event still read in Godot Compatibility renderer?
- Does moving the camera slightly break the illusion?
- How long is the Blender-to-running-build iteration?

## v0.2 design correction

The first visible pass failed aesthetically: one clean indentation plus one circular bulge read as a deformation demo, not horror. The current pass deliberately separates the event into a hand-sized indentation, a migrating repaired seam, several connected remote cavities, and a vertical door-edge response. The engine gate can pass even if this second shape language still needs art direction.
