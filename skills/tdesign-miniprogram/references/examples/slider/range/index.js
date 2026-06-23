<!--
  TDesign TDesign Miniprogram 示例：slider - index
  覆盖组件：Slider
  来源：组件库源码 packages/components/slider/_example/index.wxml
-->

Component({
  methods: {
    onDragstart(e) {
      console.log('dragstart', e.detail);
    },
    onDragend(e) {
      console.log('dragend', e.detail);
    },
  },
});
