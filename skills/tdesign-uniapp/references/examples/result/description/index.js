<!--
  TDesign TDesign UniApp 示例：result - index
  覆盖组件：Result
  来源：组件库源码 packages/components/result/_example/index.vue
-->

Component({
  data: {
    resultList: [
      {
        title: '成功状态',
        theme: 'success',
        description: '描述文字',
      },
      {
        title: '失败状态',
        theme: 'error',
        description: '描述文字',
      },
      {
        title: '警示状态',
        theme: 'warning',
        description: '描述文字',
      },
      {
        title: '默认状态',
        theme: 'default',
        description: '描述文字',
      },
    ],
  },
});
