<!--
  TDesign TDesign Vue 2 示例：transfer - target-draggable
  覆盖组件：Transfer
  来源：组件库源码 src/transfer/_example/target-draggable.vue
-->

<template>
  <div>
    <t-transfer
      :data="list"
      v-model="targetValue"
      :checked.sync="checked"
      @change="onChange"
      @checked-change="handleCheckedChange"
      :targetDraggable="true"
      targetSort="push"
    />
  </div>
</template>
<script>
const initialList = [];
for (let i = 0; i < 20; i++) {
  initialList.push({
    value: i.toString(),
    label: `内容${i + 1}`,
    disabled: i % 4 < 1,
  });
}
export default {
  data() {
    return {
      list: initialList,
      targetValue: [],
      checked: ['2'],
    };
  },
  methods: {
    handleCheckedChange({
      checked, sourceChecked, targetChecked, type,
    }) {
      console.log('handleCheckedChange', {
        checked,
        sourceChecked,
        targetChecked,
        type,
      });
    },
    onChange(newTargetValue) {
      console.log(newTargetValue);
    },
  },
};
</script>
