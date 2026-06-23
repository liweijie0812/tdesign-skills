<!--
  TDesign TDesign UniApp 示例：checkbox - index
  覆盖组件：Checkbox
  来源：组件库源码 packages/components/checkbox/_example/index.vue
-->

Component({
  /**
   * 组件的初始数据
   */
  data: {
    demoCheckbox2: ['checkbox2', 'checkbox3'],
    activeImage: 'https://tdesign.gtimg.com/mobile/demos/checkbox-checked.png',
    inActiveImage: 'https://tdesign.gtimg.com/mobile/demos/checkbox.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      console.log('checkbox', event.detail.value);
    },
  },
});
