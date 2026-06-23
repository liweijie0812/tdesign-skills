<!--
  TDesign TDesign Vue Next 示例：space - size
  覆盖组件：Space
  来源：组件库源码 packages/components/space/_example/size.vue
-->

<template>
  <div>
    <t-slider v-model="size"></t-slider>
    <br />
    <t-space :size="size">
      <t-button>Button</t-button>
      <t-button>Button</t-button>
      <t-button>Button</t-button>
      <t-button>Button</t-button>
    </t-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { SpaceProps } from 'tdesign-vue-next';

const size = ref<SpaceProps['size']>(8);
</script>
