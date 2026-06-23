/**
 * TDesign TDesign React 示例：transfer - search
 * 覆盖组件：Transfer
 * 来源：组件库源码 packages/components/transfer/_example/search.tsx
 */

import React from 'react';
import { Transfer } from 'tdesign-react';

import type { TransferProps } from 'tdesign-react';

const list: TransferProps['data'] = [];
for (let i = 0; i < 20; i++) {
  list.push({
    value: i.toString(),
    label: `内容${i + 1}`,
    disabled: i % 4 < 1,
  });
}

export default function SearchExample() {
  return <Transfer data={list} search={true}></Transfer>;
}
