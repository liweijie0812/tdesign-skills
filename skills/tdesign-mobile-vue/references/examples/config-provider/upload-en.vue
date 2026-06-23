<!--
  TDesign TDesign Mobile Vue 示例：config-provider - upload-en
  覆盖组件：Config-provider
  来源：组件库源码 src/config-provider/demos/upload-en.vue
-->

<template>
  <t-config-provider :global-config="enConfig">
    <div class="upload-demo">
      <t-upload
        :default-files="files"
        accept="image/png"
        multiple
        action="//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
      >
      </t-upload>
    </div>
  </t-config-provider>
</template>
<script setup lang="ts">
import enConfig from 'tdesign-mobile-vue/es/locale/en_US';

const files = [
  {
    url: 'https://tdesign.gtimg.com/mobile/demos/upload6.png',
    name: 'uploaded1.png',
    type: 'image',
    status: 'progress',
  },
  {
    url: 'https://tdesign.gtimg.com/mobile/demos/upload4.png',
    name: 'uploaded1.png',
    type: 'image',
    status: 'progress',
    percent: 68,
  },
  {
    url: 'https://tdesign.gtimg.com/mobile/demos/upload4.png',
    name: 'uploaded1.png',
    type: 'image',
    status: 'fail',
  },
];
</script>

<style scoped lang="less">
.upload-demo {
  background: var(--bg-color-demo, #fff);

  & + & {
    margin-top: 16px;
  }

  &__title {
    font-size: 14px;
    margin: 24px 16px 16px;
    color: var(--td-text-color-secondary, rgba(0, 0, 0, 0.6));
  }
}
</style>
