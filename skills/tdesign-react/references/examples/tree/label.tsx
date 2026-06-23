/**
 * TDesign TDesign React 示例：tree - label
 * 覆盖组件：Tree
 * 来源：组件库源码 packages/components/tree/_example/label.tsx
 */

import React from 'react';
import { Tree } from 'tdesign-react';

import type { TreeProps } from 'tdesign-react';

const items = [
  {
    label: '1',
    children: [
      {
        label: '1.1',
      },
      {
        label: '1.2',
      },
    ],
  },
  {
    label: '2',
    children: [
      {
        label: '2.1',
      },
      {
        label: '2.2',
      },
    ],
  },
];

export default () => {
  const renderLabel: TreeProps['label'] = (node) => <strong>{`value: ${node.value}, label: ${node.label}`}</strong>;

  return <Tree data={items} expandAll label={renderLabel} />;
};
