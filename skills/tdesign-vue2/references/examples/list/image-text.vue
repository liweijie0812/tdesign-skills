<!--
  TDesign TDesign Vue 2 示例：list - image-text
  覆盖组件：List
  来源：组件库源码 src/list/_example/image-text.vue
-->

<template>
  <t-space direction="vertical">
    <t-list :split="true">
      <t-list-item>
        <t-list-item-meta :image="imageUrl" title="列表标题" description="列表内容的描述性文字"></t-list-item-meta>
      </t-list-item>
      <t-list-item>
        <t-list-item-meta :image="imageUrl" title="列表标题" description="列表内容的描述性文字"></t-list-item-meta>
      </t-list-item>
      <t-list-item>
        <t-list-item-meta :image="imageUrl" title="列表标题" description="列表内容的描述性文字"></t-list-item-meta>
      </t-list-item>
    </t-list>
    <t-list :split="true">
      <t-list-item>
        <t-list-item-meta :image="imageUrl" title="列表标题">
          <template slot="description">
            <p>列表内容的描述性文字</p>
          </template>
        </t-list-item-meta>
      </t-list-item>
    </t-list>
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://tdesign.gtimg.com/site/avatar.jpg',
    };
  },
};
</script>
