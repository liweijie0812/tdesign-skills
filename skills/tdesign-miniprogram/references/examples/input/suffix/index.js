<!--
  TDesign TDesign Miniprogram 示例：input - index
  覆盖组件：Input
  来源：组件库源码 packages/components/input/_example/index.wxml
-->

Component({
  methods: {
    click(e) {
      const { trigger } = e.detail;
      console.log('click: ', trigger);
    },
  },
});
