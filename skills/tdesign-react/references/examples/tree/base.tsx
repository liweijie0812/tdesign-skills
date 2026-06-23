/**
 * TDesign TDesign React 示例：tree - base
 * 覆盖组件：Tree
 * 来源：组件库源码 packages/components/tree/_example/base.tsx
 */

import React from 'react';
import { Tree } from 'tdesign-react';

const items = [
  {
    label: '第一段',
    children: [
      {
        label: '第二段',
      },
      {
        label: '第二段',
      },
    ],
  },
  {
    label: '第一段',
    children: [
      {
        label: '第二段',
      },
      {
        label: '第二段',
      },
    ],
  },
  {
    label: '第一段',
    children: [
      {
        label: '第二段',
      },
      {
        label: '第二段',
      },
    ],
  },
  {
    label: '第一段',
    children: [
      {
        label: '第二段',
      },
      {
        label: '第二段',
      },
    ],
  },
];

export default () => <Tree data={items} activable hover transition />;
