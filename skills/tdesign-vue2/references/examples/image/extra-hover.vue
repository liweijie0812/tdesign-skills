<!--
  TDesign TDesign Vue 2 示例：image - extra-hover
  覆盖组件：Image
  来源：组件库源码 src/image/_example/extra-hover.vue
-->

<template>
  <t-image
    src="https://tdesign.gtimg.com/demo/demo-image-1.png"
    :style="{ width: '284px', height: '160px' }"
    :overlayContent="renderMask"
    overlayTrigger="hover"
  />
</template>

<script lang="jsx">
export default {
  data() {
    return {
      // renderMask 支持插槽
      // eslint-disable-next-line
      renderMask: (h) => (
        <div
          style={{
            background: 'rgba(0,0,0,.4)',
            color: '#fff',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          预览
        </div>
      ),
    };
  },
  methods: {},
};
</script>
