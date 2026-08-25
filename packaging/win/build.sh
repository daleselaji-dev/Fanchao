#!/usr/bin/env bash
# 《返潮》H00-R0 Windows 便携包构建脚本（Linux/macOS/WSL 均可运行，无需 wine）
#
# 原理：Neutralino 官方预编译各平台二进制，`neu build` 只是把 resources.neu
# （游戏全部网页资源的打包）和对应平台的 exe 拼在一起——因此在 Linux CI 上
# 也能产出真正可运行的 Windows x64 exe。
#
# 用法：bash packaging/win/build.sh
# 产物：release/windows/Fanchao-H00R0-win-x64.zip（含 exe + resources.neu + 启动说明）
set -euo pipefail
cd "$(dirname "$0")"
ROOT="$(cd ../.. && pwd)"

echo "[1/4] 同步游戏资源 demo/web -> resources/"
rm -rf resources
mkdir -p resources
cp -r "$ROOT/demo/web/index.html" "$ROOT/demo/web/js" "$ROOT/demo/web/lib" resources/

echo "[2/4] 下载 Neutralino 预编译二进制（首次需要联网）"
npx --yes @neutralinojs/neu update

echo "[3/4] 构建各平台二进制"
npx --yes @neutralinojs/neu build --release

echo "[4/4] 组装 Windows 便携包 -> release/windows/"
OUT="$ROOT/release/windows"
STAGE="$(mktemp -d)"
mkdir -p "$OUT"
cp dist/fanchao-h00r0/fanchao-h00r0-win_x64.exe "$STAGE/返潮-H00R0.exe"
cp dist/fanchao-h00r0/resources.neu "$STAGE/resources.neu"
cat > "$STAGE/启动说明.txt" <<'EOF'
《返潮》H00-R0 垂直切片 —— 婚宴后场：返席
=========================================

运行：双击 返潮-H00R0.exe（保持 resources.neu 与 exe 在同一目录）。
要求：Windows 10/11 x64，已内置 WebView2（系统默认自带；缺失时到
      https://developer.microsoft.com/microsoft-edge/webview2/ 安装运行时）。

操作：
  鼠标        视角（点击画面锁定指针，Esc 释放）
  W A S D     移动
  Q（按住）   借视——从返席人的视角看世界（有过载上限，会烧断冷却）
  E           在 C 房间卡座前归档录像带
  R           复位到出生点
  M           静音

红线提示：本作无跳脸、无追击，实体不会伤害你。它只是在工作。
低处的空气更沉，蹲入低处巷可以听见界面之下的东西。
EOF
( cd "$STAGE" && zip -q -9 -r "$OUT/Fanchao-H00R0-win-x64.zip" . )
rm -rf "$STAGE"
ls -la "$OUT"
echo "完成。"
