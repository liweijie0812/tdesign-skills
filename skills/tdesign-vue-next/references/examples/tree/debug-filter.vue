<!--
  TDesign TDesign Vue Next 示例：tree - debug-filter
  覆盖组件：Tree
  来源：组件库源码 packages/components/tree/_example/debug-filter.vue
-->

<template>
  <t-space direction="vertical">
    <t-space>
      <t-input-adornment prepend="filter:">
        <t-input v-model="filterText" @change="onInput" />
      </t-input-adornment>
    </t-space>
    <t-space>
      <span>允许折叠:</span>
      <t-switch v-model="allowFoldNodeOnFilter" />
    </t-space>
    <t-space>
      <span>可选:</span>
      <t-switch v-model="isCheckable" />
    </t-space>
    <t-tree
      ref="tree"
      :data="items"
      expand-on-click-node
      :allow-fold-node-on-filter="allowFoldNodeOnFilter"
      :default-expanded="expanded"
      :filter="filterByText"
      :checkable="isCheckable"
      hover
      line
    />
  </t-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TreeProps, InputProps } from 'tdesign-vue-next';

const exampleItems = [
  {
    value: '1',
    label: '1',
    children: [
      {
        value: '1.1',
        label: '1.1',
        children: [
          {
            value: '1.1.1',
            label: '1.1.1',
            children: [
              {
                value: '1.1.1.1',
                label: '1.1.1.1',
              },
              {
                value: '1.1.1.2',
                label: '1.1.1.2',
              },
            ],
          },
          {
            value: '1.1.2',
            label: '1.1.2',
            children: [
              {
                value: '1.1.2.1',
                label: '1.1.2.1',
              },
              {
                value: '1.1.2.2',
                label: '1.1.2.2',
              },
            ],
          },
        ],
      },
      {
        value: '1.2',
        label: '1.2',
        children: [
          {
            value: '1.2.1',
            label: '1.2.1',
            children: [
              {
                value: '1.2.1.1',
                label: '1.2.1.1',
              },
              {
                value: '1.2.1.2',
                label: '1.2.1.2',
              },
            ],
          },
          {
            value: '1.2.2',
            label: '1.2.2',
            children: [
              {
                value: '1.2.2.1',
                label: '1.2.2.1',
              },
              {
                value: '1.2.2.2',
                label: '1.2.2.2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: '2',
    children: [
      {
        value: '2.1',
        label: '2.1',
      },
      {
        value: '2.2',
        label: '2.2',
      },
    ],
  },
];
const isCheckable = ref(false);
const filterText = ref('');
const filterByText = ref<TreeProps['filter']>(null);
const expanded = ref<TreeProps['defaultExpanded']>(['1.1.1']);
const allowFoldNodeOnFilter = ref(false);
const items = ref<TreeProps['data']>(exampleItems);
const onInput: InputProps['onChange'] = (state) => {
  console.info('onInput:', state);
  if (filterText.value) {
    // 存在过滤文案，才启用过滤
    filterByText.value = (node) => {
      // @ts-ignore
      const rs = node.data.label.indexOf(filterText.value) >= 0;
      // 命中的节点会强制展示
      // 命中节点的路径节点会锁定展示
      // 未命中的节点会隐藏
      return rs;
    };
  } else {
    // 过滤文案为空，则还原 tree 为无过滤状态
    filterByText.value = null;
  }
};
</script>
