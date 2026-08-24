// 兼容 `node --test demo/web3d/tests/` 的目录入口（本机 Node 22 把目录参数按入口模块解析）。
// 测试本体在 entity.test.mjs；此文件只做转发，不写用例。
import "./entity.test.mjs";
