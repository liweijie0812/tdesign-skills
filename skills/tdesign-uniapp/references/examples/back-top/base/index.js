<!--
  TDesign TDesign UniApp 示例：back-top - index
  覆盖组件：Back-top
  来源：组件库源码 packages/components/back-top/_example/index.vue
-->

Component({
  properties: {
    scrollTop: { type: Number, value: 0 },
  },
  data: {
    backTopTheme: 'round',
    backTopText: '顶部',
  },
  methods: {
    onToTop(e) {
      this.triggerEvent('to-top', e);
    },
  },
});
