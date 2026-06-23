<!--
  TDesign TDesign UniApp 示例：slider - index
  覆盖组件：Slider
  来源：组件库源码 packages/components/slider/_example/index.vue
-->

Component({
  data: {
    marks: { 20: '20', 40: '40', 60: '60', 80: '80', 100: '100' },
  },
  methods: {
    handleChange(e) {
      console.log(e.detail.value);
    },
  },
});
