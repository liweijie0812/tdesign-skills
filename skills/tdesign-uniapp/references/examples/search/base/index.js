<!--
  TDesign TDesign UniApp 示例：search - index
  覆盖组件：Search
  来源：组件库源码 packages/components/search/_example/index.vue
-->

const allList = [
  'tdesign-vue',
  'tdesign-react',
  'tdesign-miniprogram',
  'tdesign-angular',
  'tdesign-mobile-vue',
  'tdesign-mobile-react',
];

Component({
  data: {
    resultList: allList,
  },
  methods: {
    onChangeValue(e) {
      const { value } = e.detail;
      this.setData({
        resultList: value ? allList.filter((v) => v.includes(value)) : allList,
      });
    },
  },
});
