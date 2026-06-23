<!--
  TDesign TDesign Vue 2 示例：cascader - value-mode
  覆盖组件：Cascader
  来源：组件库源码 src/cascader/_example/value-mode.vue
-->

<template>
  <t-space direction="vertical">
    <t-cascader v-model="value1" :options="options" multiple value-mode="onlyLeaf" />
    <t-cascader v-model="value2" :options="options" multiple value-mode="parentFirst" />
    <t-cascader v-model="value3" :options="options" multiple value-mode="all" />
  </t-space>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          label: '选项一',
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
              label: '子选项三',
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
              label: '子选项二',
              value: '2.2',
            },
          ],
        },
      ],
      value1: [],
      value2: [],
      value3: [],
    };
  },
};
</script>
