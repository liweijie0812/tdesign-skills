<!--
  TDesign TDesign Miniprogram 示例：result - index
  覆盖组件：Result
  来源：组件库源码 packages/components/result/_example/index.wxml
-->

Component({
  data: {
    resultList: [
      {
        title: '成功状态',
        theme: 'success',
      },
      {
        title: '失败状态',
        theme: 'error',
      },
      {
        title: '警示状态',
        theme: 'warning',
      },
      {
        title: '默认状态',
        theme: 'default',
      },
    ],
  },
});
