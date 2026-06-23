<!--
  TDesign TDesign Vue 2 示例：cascader - show-all-levels
  覆盖组件：Cascader
  来源：组件库源码 src/cascader/_example/show-all-levels.vue
-->

<template>
  <t-space direction="vertical">
    <t-cascader v-model="value" :options="options" :show-all-levels="false" />
    <t-cascader v-model="value2" :options="options" :show-all-levels="false" multiple />
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
      value: '',
      value2: [],
    };
  },
};
</script>
