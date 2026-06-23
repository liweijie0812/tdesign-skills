<!--
  TDesign TDesign Vue 2 示例：cascader - max
  覆盖组件：Cascader
  来源：组件库源码 src/cascader/_example/max.vue
-->

<template>
  <t-cascader v-model="value" :options="options" multiple clearable :max="3" />
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
      value: [],
    };
  },
};
</script>
