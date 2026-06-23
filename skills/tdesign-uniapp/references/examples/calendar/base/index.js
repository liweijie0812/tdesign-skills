<!--
  TDesign TDesign UniApp 示例：calendar - index
  覆盖组件：Calendar
  来源：组件库源码 packages/components/calendar/_example/index.vue
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
      console.log(value);
      this.setData({
        value,
      });
    },

    onClose({ detail }) {
      console.log(detail.trigger);
    },
  },
});
