# TDesign Vue Next 示例

按组件名分目录，每个目录下放该组件的典型用法示例。

## 示例列表

| 场景 | 文件 | 覆盖组件 | 说明 |
| --- | --- | --- | --- |
| 基础表单 | `form/basic-form.vue` | Form, FormItem, Input, InputNumber, Select, Radio, DatePicker, Button, Message | 基础表单页：v-model 双向绑定、Composition API、校验规则、提交与重置 |
| 侧边导航应用壳 | `layout/side-layout.vue` | Layout, Header, Aside, Content, Menu, Breadcrumb, Button, Avatar | 左侧导航标准模板，包含 Header Token 高度约束 |
| 顶部导航应用壳 | `layout/top-layout.vue` | Layout, Header, Content, HeadMenu, Breadcrumb, Button, Avatar | 顶部导航标准模板，保留单一 Logo / 系统名称品牌位 |
| 混合导航应用壳 | `layout/mix-layout.vue` | Layout, Header, Aside, Content, HeadMenu, Menu, Breadcrumb, Avatar | 顶部一级导航 + 侧边二级导航模板，避免重复品牌位 |
| 仪表盘 | `pages/dashboard.vue` | Card, Row, Col, Statistic, Table, Tag, Empty | 指标卡、任务表格和图表占位状态模板 |
| 表格列表页 | `pages/table-list.vue` | Card, Form, Input, Select, Button, Table, Tag, Popconfirm, Message | 筛选、表格、分页、空状态和危险操作确认模板 |
| 表单页 | `pages/form-page.vue` | Card, Form, FormItem, Input, Select, DatePicker, Switch, Button, Message | 标准编辑表单，包含校验、提交 loading 和反馈 |

## 使用说明

- 示例使用 Vue 3 SFC + `<script setup lang="ts">` Composition API。
- 组件使用 `<t-*>` 标签，依赖项目已全局注册 `tdesign-vue-next` 或配置组件自动导入；插件式 API 如 `MessagePlugin` 按需从 `tdesign-vue-next` 引入。
- 所有 props 名称均为真实 API，具体类型和默认值请回到 `../api/<component>/index.md` 确认。
- 示例代码可独立复制到 `.vue` 文件中运行。
- Web 中后台完整页面生成前先查 `skills/tdesign-composition/references/design/checklist.json`，交付前按检查项自检。
