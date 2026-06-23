<!--
  TDesign TDesign UniApp 示例：footer - index
  覆盖组件：Footer
  来源：组件库源码 packages/components/footer/_example/index.vue
-->

import themeChangeBehavior from 'tdesign-miniprogram/mixins/theme-change';

Component({
  behaviors: [themeChangeBehavior],
  data: {
    logo: {
      icon: 'https://tdesign.gtimg.com/mobile/demos/logo2.png',
      title: '品牌名称',
    },
  },
});
