<!--
  TDesign TDesign UniApp 示例：date-time-picker - index
  覆盖组件：Date-time-picker
  来源：组件库源码 packages/components/date-time-picker/_example/index.vue
-->

Component({
  data: {
    mode: '',
    second: '10:00:00',
    minute: '23:59',
    start: '2025-04-29 00:00:00',
  },
  methods: {
    showPicker(e) {
      const { mode } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
      });
    },
    hidePicker() {
      const { mode } = this.data;
      this.setData({
        [`${mode}Visible`]: false,
      });
    },
    onConfirm(e) {
      const { value } = e.detail;
      const { mode } = this.data;

      console.log('confirm', value);

      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
      });

      this.hidePicker();
    },

    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },
  },
});
