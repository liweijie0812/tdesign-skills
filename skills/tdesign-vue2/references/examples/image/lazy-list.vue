<!--
  TDesign TDesign Vue 2 示例：image - lazy-list
  覆盖组件：Image
  来源：组件库源码 src/image/_example/lazy-list.vue
-->

<template>
  <t-space direction="vertical" :key="loadingCount">
    <t-space :breakLine="true" :style="{ height: '240px', 'overflow-y': 'scroll' }">
      <t-image
        v-for="item in list"
        :key="item"
        src="https://tdesign.gtimg.com/demo/demo-image-1.png"
        :style="{ width: '230px', height: '120px' }"
        :lazy="true"
      />
    </t-space>
    <t-button variant="outline" :icon="renderRefreshIcon" @click="loadingCount = loadingCount + 1">
      重演 lazy load
    </t-button>
  </t-space>
</template>

<script lang="jsx">
import { RefreshIcon } from 'tdesign-icons-vue';

export default {
  data() {
    return {
      loadingCount: 0,
      list: Array.from({ length: 24 }).map((_, index) => index),
    };
  },
  methods: {
    renderRefreshIcon() {
      return <RefreshIcon />;
    },
  },
};
</script>
