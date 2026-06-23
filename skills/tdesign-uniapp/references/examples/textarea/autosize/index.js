<!--
  TDesign TDesign UniApp 示例：textarea - index
  覆盖组件：Textarea
  来源：组件库源码 packages/components/textarea/_example/index.vue
-->

Component({
  data: {
    autosize: {
      maxHeight: 120,
      minHeight: 20,
    },
  },
  methods: {
    onLineChange(e) {
      console.log('lineCount: ', e.detail);
    },
  },
});
