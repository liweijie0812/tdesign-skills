<!--
  TDesign TDesign Vue 2 示例：transfer - disabled
  覆盖组件：Transfer
  来源：组件库源码 src/transfer/_example/disabled.vue
-->

<template>
  <t-transfer :data="list" :disabled="[false, true]" :default-value="targetValue" />
</template>
<script>
const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i,
    label: `内容${i + 1}`,
    disabled: i % 4 < 1,
  });
}
export default {
  data() {
    return {
      list: initialList,
      targetValue: initialList.map((item) => item.value).filter((v) => parseInt(v, 10) % 2 === 0), // 偶数
    };
  },
};
</script>
