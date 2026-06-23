<!--
  TDesign TDesign Miniprogram 示例：calendar - index
  覆盖组件：Calendar
  来源：组件库源码 packages/components/calendar/_example/index.wxml
-->

Component({
  data: {
    visible: false,
    value: null,
  },
  methods: {
    handleCalendar() {
      this.setData({ visible: true });
    },
    handleConfirm(e) {
      const { value } = e.detail;
      this.setData({ value });
      console.log(e.detail.value);
    },
  },
});
