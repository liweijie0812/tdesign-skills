<!--
  TDesign TDesign Vue 2 示例：empty - self-defined
  覆盖组件：Empty
  来源：组件库源码 src/empty/_example/self-defined.vue
-->

<template>
  <t-row :gutter="40">
    <t-col>
      <t-empty description="暂无数据">
        <template #image>
          <error-circle-icon :size="64" color="var(--td-text-color-placeholder)" />
        </template>
      </t-empty>
    </t-col>
    <t-col>
      <t-empty description="暂无数据">
        <template #image>
          <div
            :style="{
              width: '64px',
              height: '64px',
              backgroundImage: 'url(https://tdesign.gtimg.com/demo/demo-image-1.png)',
              backgroundSize: '100% 100%',
            }"
          ></div>
        </template>
      </t-empty>
    </t-col>
  </t-row>
</template>
<script>
import { ErrorCircleIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ErrorCircleIcon,
  },
};
</script>
