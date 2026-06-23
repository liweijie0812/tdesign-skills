<!--
  TDesign TDesign UniApp 示例：date-time-picker - index
  覆盖组件：Date-time-picker
  来源：组件库源码 packages/components/date-time-picker/_example/index.vue
-->

Component({
  data: {
    text: '',
    value: '10:00:00',
    visible: false,
  },
  methods: {
    showPicker() {
      this.setData({
        visible: true,
      });
    },
    hidePicker() {
      this.setData({
        visible: false,
      });
    },
    onConfirm(e) {
      const { value } = e.detail;

      console.log('confirm', value);

      this.setData({
        value,
        text: value,
      });

      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },
  },
});
