<!--
  TDesign TDesign Vue 2 示例：avatar - base
  覆盖组件：Avatar
  来源：组件库源码 src/avatar/_example/base.vue
-->

<template>
  <t-space size="large">
    <t-avatar :icon="icon"></t-avatar>
    <t-avatar :image="image" :hideOnLoadFailed="false" @error="onError"></t-avatar>
    <t-avatar>W</t-avatar>
  </t-space>
</template>
<script lang="jsx">
import { UserIcon } from 'tdesign-icons-vue';

export default {
  components: {},
  data() {
    return {
      image: 'https://tdesign.gtimg.com/site/avatar.jpg',
    };
  },
  computed: {
    icon() {
      return () => <UserIcon />;
    },
  },
  methods: {
    onError(params) {
      console.log(params);
    },
  },
};
</script>
