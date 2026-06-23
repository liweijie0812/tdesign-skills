<!--
  TDesign TDesign Miniprogram 示例：fab - index
  覆盖组件：Fab
  来源：组件库源码 packages/components/fab/_example/index.wxml
-->

import pageScrollMixin from 'tdesign-miniprogram/mixins/page-scroll';

Component({
  behaviors: [pageScrollMixin()],
  data: {
    scrolling: false,
    timer: null,
  },
  methods: {
    handleClick(e) {
      console.log('handleClick: ', e);
    },
    handleDragStart(e) {
      console.log('handleDragStart: ', e);
    },
    handleDragEnd(e) {
      console.log('handleDragEnd: ', e);
    },
    onScroll() {
      clearTimeout(this.timer);
      this.setData({
        scrolling: true,
      });
      this.timer = setTimeout(() => {
        this.setData({
          scrolling: false,
        });
      }, 100);
    },
  },
});
