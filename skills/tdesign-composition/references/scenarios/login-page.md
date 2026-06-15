# 登录/注册页场景卡

用于登录、注册、找回密码、首次设置密码和统一身份入口等认证页面。

## 默认组件组合

### Web

- 页面容器：`Layout` 或页面级容器，登录面板使用 `Card`、`Space`。
- 表单主体：`Form`、`FormItem`、`Input`，密码字段使用 `Input` 的密码类型或当前栈等价能力。
- 操作区：`Button`，主登录按钮必须有 loading 或防重复提交策略。
- 反馈：错误原因用 `Alert`、`Message` 或表单项错误，不用只改变边框颜色。
- 背景：可使用品牌色块、图片或渐变，但彩色实心底文字必须使用 `--td-text-color-anti`。

### Mobile / Miniprogram

- 页面容器：`Navbar` 或当前项目登录容器，避免桌面双栏布局直接搬到小屏。
- 表单主体：`Form`、`FormItem`、`Input`，必要时用 `Cell` / `CellGroup` 分组。
- 操作区：`Button` 使用 block / 大尺寸能力，验证码、协议勾选和第三方登录按当前端 API。
- 反馈：使用 `Toast`、`Message`、`Alert` 或表单项错误文本。

## 选型规则

- 登录、注册和找回密码都属于强校验表单，必须使用真实 `Form` 和输入组件。
- 账号、密码、验证码和协议勾选必须有明确校验文案。
- 后端错误不要只弹一次 toast，必要时在表单上方保留 `Alert` 让用户可读。
- 认证页背景可更有品牌感，但不要牺牲文本对比度。
- 密码、验证码和 token 不写入示例常量或日志。

## 栈差异提醒

- React 查 `skills/tdesign-react/references/api/form/index.md`、`skills/tdesign-react/references/api/input/index.md`。
- Vue Next 查 `skills/tdesign-vue-next/references/api/form/index.md`、`skills/tdesign-vue-next/references/api/input/index.md`，完整模板见 `skills/tdesign-vue-next/references/examples/pages/login-page.vue`。
- Vue 2 查 `skills/tdesign-vue2/references/api/form/index.md`、`skills/tdesign-vue2/references/api/input/index.md`。
- Mobile React / Mobile Vue / Miniprogram 查对应端 `form`、`input`、`button`、`toast` 或 `message` API。

## 验证清单

- 必填、格式、密码可见性、验证码和协议勾选逻辑明确。
- 提交按钮有 loading，重复点击不会重复请求。
- 错误状态包含文字说明、表单状态或提示组件，不只靠颜色。
- 彩色背景上的标题、说明和按钮文字对比度足够。
- 移动端键盘弹起、底部按钮、安全区和小屏高度下可用。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-009`、`DS-011`、`DS-012`。
- Web 登录页如使用品牌色背景，文字、图标和 Avatar 缩写必须使用 `--td-text-color-anti` 或等价反色 Token。
- 认证页交付前按 `../design/checklist.json` 输出结果；能运行脚本时按 `../quality-gate.md` 检查目标文件。
