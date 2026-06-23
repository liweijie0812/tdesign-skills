<!--
  TDesign TDesign Vue 2 示例：cascader - ellipsis
  覆盖组件：Cascader
  来源：组件库源码 src/cascader/_example/ellipsis.vue
-->

<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" clearable placeholder="请选择" />
    <t-cascader v-model="value2" multiple :options="options" clearable placeholder="请选择" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '当选项一数据展示文本过长时',
          value: '1',
          children: [
            {
              label: '子选项一',
              value: '1.1',
            },
            {
              label: '子选项二',
              value: '1.2',
            },
            {
              label: '当选项数据展示文本过长时',
              value: '1.3',
            },
          ],
        },
        {
          label: '选项二',
          value: '2',
          children: [
            {
              label: '子选项一',
              value: '2.1',
            },
            {
              label: '当选项数据展示文本过长时',
              value: '2.2',
            },
          ],
        },
      ],
      value1: '1.1',
      value2: ['1.1'],
    };
  },
};
</script>
