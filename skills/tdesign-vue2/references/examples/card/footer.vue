<!--
  TDesign TDesign Vue 2 示例：card - footer
  覆盖组件：Card
  来源：组件库源码 src/card/_example/footer.vue
-->

<template>
  <t-card :cover="cover" bordered :style="{ width: '400px' }">
    <template #footer>
      <t-row :align="'middle'" justify="center" style="gap: 24px">
        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <thumb-up-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <chat-icon />
          </t-button>
        </t-col>

        <t-col flex="auto" style="display: inline-flex; justify-content: center">
          <t-button variant="text" shape="square">
            <share-icon />
          </t-button>
        </t-col>
      </t-row>
    </template>
  </t-card>
</template>
<script lang="jsx">
import { ThumbUpIcon, ChatIcon, ShareIcon } from 'tdesign-icons-vue';

export default {
  components: {
    ThumbUpIcon,
    ChatIcon,
    ShareIcon,
  },
  data() {
    return {
      cover: 'https://tdesign.gtimg.com/site/source/card-demo.png',
    };
  },
};
</script>
