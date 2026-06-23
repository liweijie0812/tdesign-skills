<!--
  TDesign TDesign UniApp 示例：steps - index
  覆盖组件：Steps
  来源：组件库源码 packages/components/steps/_example/index.vue
-->

Component({
  data: {
    first: 1,
    second: 1,
    third: 1,
  },

  methods: {
    onFirstChange(e) {
      this.setData({ first: e.detail.current });
    },
    onSecondChange(e) {
      this.setData({ second: e.detail.current });
    },
    onThirdChange(e) {
      this.setData({ third: e.detail.current });
    },
  },
});
