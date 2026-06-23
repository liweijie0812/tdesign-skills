<!--
  TDesign TDesign UniApp 示例：notice-bar - index
  覆盖组件：Notice-bar
  来源：组件库源码 packages/components/notice-bar/_example/index.vue
-->

Component({
  data: {
    visible: true,
    navigatorProps: {
      url: '/pages/xxx/xxx',
    },
  },

  methods: {
    click(e) {
      const { trigger } = e.detail;
      console.log(`click on the ${trigger} area`);
    },
  },
});
