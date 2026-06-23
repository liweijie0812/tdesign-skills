<!--
  TDesign TDesign UniApp 示例：date-time-picker - index
  覆盖组件：Date-time-picker
  来源：组件库源码 packages/components/date-time-picker/_example/index.vue
-->

Page({
  data: {
    date: new Date('2021-12-23').getTime(), // 支持时间戳传入

    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
  },

  onConfirm(e) {
    const { value } = e.detail;

    console.log('confirm', value);

    this.setData({ value });
  },

  onColumnChange(e) {
    console.log('pick', e.detail.value);
  },
});
