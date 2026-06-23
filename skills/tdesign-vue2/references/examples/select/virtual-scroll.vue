<!--
  TDesign TDesign Vue 2 示例：select - virtual-scroll
  覆盖组件：Select
  来源：组件库源码 src/select/_example/virtual-scroll.vue
-->

<template>
  <!-- 开启虚拟滚动请为select的panel设定好height 通过popupProps进行透传 -->
  <t-space>
    <t-select
      v-model="value1"
      :options="options"
      filterable
      placeholder="请选择"
      :style="{ width: '300px' }"
      :scroll="{ type: 'virtual' }"
      :popup-props="{ overlayInnerStyle: { height: '300px' } }"
    />
    <!-- 开启虚拟滚动请为select的panel设定好height 通过popupProps进行透传 -->
    <t-select
      v-model="value2"
      placeholder="请选择"
      :style="{ width: '300px' }"
      :scroll="{ type: 'virtual' }"
      :popup-props="{ overlayInnerStyle: { height: '300px' } }"
    >
      <t-option v-for="item in options" :value="item.value" :label="item.label" :key="item.value"></t-option>
    </t-select>
  </t-space>
</template>

<script lang="jsx">
export default {
  data() {
    const initialOptions = [];
    for (let i = 0; i < 10000; i++) {
      initialOptions.push({ label: `选项${i + 1}`, value: String(i) });
    }
    return {
      value1: '',
      value2: '',
      options: initialOptions,
    };
  },
};
</script>
