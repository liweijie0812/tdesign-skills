<!--
  TDesign TDesign UniApp 示例：tabs - index
  覆盖组件：Tabs
  来源：组件库源码 packages/components/tabs/_example/index.vue
-->

Component({
  data: {
    stickyProps: {
      zIndex: 100,
    },
  },
  methods: {
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },

    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },

    onStickyScroll(event) {
      console.log(event.detail);
    },
  },
});
