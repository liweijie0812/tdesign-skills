<!--
  TDesign TDesign UniApp 示例：search - index
  覆盖组件：Search
  来源：组件库源码 packages/components/search/_example/index.vue
-->

Component({
  data: {
    value: '',
  },
  methods: {
    onChange(e) {
      console.log(e.detail.value);
    },
  },
});
