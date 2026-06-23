<!--
  TDesign TDesign Miniprogram 示例：calendar - index
  覆盖组件：Calendar
  来源：组件库源码 packages/components/calendar/_example/index.wxml
-->

Component({
  data: {
    visible: false,
    value: [new Date(2024, 11, 5).getTime(), new Date(2024, 11, 10).getTime()],
    minDate: new Date(2024, 10, 1).getTime(),
    maxDate: new Date(2024, 12, 1).getTime(),
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },

    handleConfirm(e) {
      console.log(e.detail.value);
      const { value } = e.detail;
      this.setData({
        value,
      });
    },
  },
});
