<!--
  TDesign TDesign Vue 2 示例：rate - icon
  覆盖组件：Rate
  来源：组件库源码 src/rate/_example/icon.vue
-->

<template>
  <t-space direction="vertical">
    <t-rate v-model="value1">
      <template #icon>
        <star-icon />
      </template>
    </t-rate>
    <t-rate v-model="value2">
      <template #icon>
        <logo-github-icon />
      </template>
    </t-rate>
    <t-rate v-model="value3" allow-half color="var(--td-error-color-7)">
      <template #icon>
        <heart-filled-icon />
      </template>
    </t-rate>
  </t-space>
</template>
<script>
import { StarIcon, LogoGithubIcon, HeartFilledIcon } from 'tdesign-icons-vue';

export default {
  components: {
    StarIcon,
    LogoGithubIcon,
    HeartFilledIcon,
  },
  data() {
    return {
      value1: 1,
      value2: 2,
      value3: 2.5,
    };
  },
};
</script>
