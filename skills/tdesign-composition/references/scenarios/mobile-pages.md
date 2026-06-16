# Mobile 页面场景卡

用于移动端表单页、移动端列表页、移动端详情页和轻量结果页。此场景卡优先服务 TDesign Mobile React、TDesign Mobile Vue、Miniprogram 和 UniApp，不直接复用 Web 中后台应用壳。

## 默认组件组合

### 移动端表单页

- 顶部导航：`Navbar`，开启安全区与占位能力时按当前端 API。
- 表单主体：`Form`、`FormItem`、`Input`、`Textarea`、`Picker`、`Cascader`、`DateTimePicker`、`Switch`、`Radio`、`Checkbox`。
- 分组结构：`Cell`、`CellGroup`、`Divider`、`Collapse`，不要照搬 Web `Card` 密度。
- 操作区：`Button`，常用 block / large / 吸底容器，提交有 loading。
- 反馈：`Toast`、`Message`、`Dialog`、`Empty`，错误要有文字说明。

### 移动端列表页

- 顶部导航：`Navbar`，必要时搭配 `Search`。
- 筛选区：`Tabs`、`DropdownMenu`、`Popup`、`Drawer`、`Picker`，复杂筛选放到弹层。
- 数据区：条目流优先用 `Cell`、`CellGroup`、`List`；少列结构化数据可用 `Table`。
- 刷新分页：`PullDownRefresh`、加载更多、接口分页，不照搬 Web 分页器。
- 状态反馈：`Loading`、`Skeleton`、`Empty`、`Toast`，失败和无权限要有文字说明。

## Mobile Vue 代码骨架

```vue
<script setup lang="ts">
import { reactive, shallowRef } from 'vue';

const refreshing = shallowRef(false);
const formData = reactive({ name: '', phone: '' });

function onRefresh() {
  refreshing.value = true;
  window.setTimeout(() => {
    refreshing.value = false;
  }, 600);
}

function onSubmit({ validateResult }: { validateResult: boolean | Record<string, unknown> }) {
  if (validateResult !== true) return;
}
</script>

<template>
  <t-navbar title="移动端页面" left-arrow placeholder />
  <t-pull-down-refresh v-model="refreshing" @refresh="onRefresh">
    <t-form :data="formData" label-align="top" @submit="onSubmit">
      <t-form-item label="姓名" name="name" :rules="[{ required: true, message: '请输入姓名' }]">
        <t-input v-model="formData.name" clearable placeholder="请输入姓名" />
      </t-form-item>
      <t-form-item label="手机号" name="phone" :rules="[{ telnumber: true, message: '请输入正确手机号' }]">
        <t-input v-model="formData.phone" clearable type="tel" placeholder="请输入手机号" />
      </t-form-item>
      <div class="mobile-page__actions">
        <t-button block theme="primary" type="submit">提交</t-button>
      </div>
    </t-form>
  </t-pull-down-refresh>
</template>
```

## 选型规则

- Mobile / Miniprogram 没有 Web `Header` / `Aside` 常驻应用壳，优先使用页面级导航和底部主导航。
- 小屏列表优先减少列数、拆详情页或使用条目流，不强行复刻 Web 宽表格。
- 表单字段按触控输入优化，日期、级联、枚举优先用当前端选择器组件。
- 危险操作使用 `Dialog` 或当前端等价确认组件，不只改变按钮颜色。
- 状态表达包含文字、组件状态或图标，不只靠颜色。

## 栈差异提醒

- Mobile React 查 `skills/tdesign-mobile-react/references/api/navbar/index.md`、`form/index.md`、`cell/index.md`、`pull-down-refresh/index.md`。
- Mobile Vue 查 `skills/tdesign-mobile-vue/references/api/navbar/index.md`、`form/index.md`、`cell/index.md`、`pull-down-refresh/index.md`。
- Miniprogram 查 `skills/tdesign-miniprogram/references/api/navbar/index.md`、`form/index.md`、`cell/index.md`、`pull-down-refresh/index.md`。
- UniApp 查 `skills/tdesign-uniapp/references/api/` 下对应组件，并按 Vue 模板和 easycom 写法实现。

## 验证清单

- 安全区、固定 Navbar、底部 TabBar 和吸底按钮不会遮挡内容。
- 键盘弹起后表单字段、错误文案和提交按钮仍可访问。
- 下拉刷新、加载更多、空态、失败态和无权限态都有清晰反馈。
- 触控目标尺寸、列表密度和横向滚动符合移动端使用场景。
- Mobile / Miniprogram 不误用 Web Header、Aside、Content、Footer 语义。

## 设计规范要点

- 适用自检项：`DS-001`、`DS-002`、`DS-003`、`DS-006`、`DS-007`、`DS-008`、`DS-011`、`DS-012`。
- `DS-004`、`DS-005` 和 Web `DS-010` 不默认套用移动端；只有明确使用移动端 `Table` 展示结构化行列数据时才人工追加 `DS-010`。
- 移动端页面交付前按 `../design/checklist.json` 中 `platforms` 包含 `mobile` / `miniprogram` 的检查项说明适用、不适用或需人工确认；运行脚本时使用 `--platform mobile` 或 `--platform miniprogram`。
