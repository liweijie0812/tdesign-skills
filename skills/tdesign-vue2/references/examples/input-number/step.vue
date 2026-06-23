<!--
  TDesign TDesign Vue 2 示例：input-number - step
  覆盖组件：Input-number
  来源：组件库源码 src/input-number/_example/step.vue
-->

<template>
  <div>
    <t-input-number
      v-model="value"
      :max="15"
      :min="-5"
      :step="1.2"
      :decimal-places="2"
      @change="onChange"
    ></t-input-number>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.2,
    };
  },
  methods: {
    onChange(ev) {
      console.info(ev);
    },
  },
};
</script>
