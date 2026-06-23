<!--
  TDesign TDesign UniApp 示例：steps - index
  覆盖组件：Steps
  来源：组件库源码 packages/components/steps/_example/index.vue
-->

Component({
  data: {
    count: 4,
  },
  methods: {
    toNext() {
      this.setData({ count: this.data.count + 1 });
    },
    onCascader(e) {
      const { current } = e.detail;

      this.setData({
        count: current + 1,
      });
    },
  },
});
