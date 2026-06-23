/**
 * TDesign TDesign React 示例：tree - expand-level
 * 覆盖组件：Tree
 * 来源：组件库源码 packages/components/tree/_example/expand-level.tsx
 */

import React from 'react';
import { Tree } from 'tdesign-react';

const items = [
  {
    label: '1',
    children: [
      {
        label: '1.1',
        children: [
          {
            label: '1.1.1',
          },
          {
            label: '1.1.2',
          },
        ],
      },
      {
        label: '1.2',
        children: [
          {
            label: '1.2.1',
          },
          {
            label: '1.2.2',
          },
        ],
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

export default () => <Tree hover data={items} expandLevel={1} />;
