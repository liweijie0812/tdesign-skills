<!--
  TDesign TDesign UniApp 示例：calendar - index
  覆盖组件：Calendar
  来源：组件库源码 packages/components/calendar/_example/index.vue
-->

Component({
  data: {
    visible: false,
    value: new Date(2022, 1, 27).getTime(),
    minDate: new Date(2022, 0, 10).getTime(),
    maxDate: new Date(2027, 10, 27).getTime(),
  },

  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },

    handleConfirm(e) {
      this.setData({ value: e.detail.value });
      console.log(e.detail.value);
    },

    handlePanelChange(e) {
      const { year, month } = e.detail;
      console.log('year: ', year, 'month: ', month);
    },
  },
});
