/**
 * TDesign TDesign React 示例：transfer - pagination
 * 覆盖组件：Transfer
 * 来源：组件库源码 packages/components/transfer/_example/pagination.tsx
 */

import React from 'react';
import { Transfer } from 'tdesign-react';

import type { TransferProps } from 'tdesign-react';

const list: TransferProps['data'] = [];
for (let i = 0; i < 20; i++) {
  list.push({
    value: i.toString(),
    label: `内容${i + 1}`,
  });
}

export default function PaginationExample() {
  const pagination = [
    {
      pageSize: 10,
      onPageChange: (current: number) => {
        console.log('current', current);
      },
    },
    {
      pageSize: 5,
      defaultCurrent: 1,
    },
  ];

  const handlePageChange: TransferProps['onPageChange'] = (...args) => {
    console.log('args', args);
  };
  return <Transfer data={list} pagination={pagination} onPageChange={handlePageChange}></Transfer>;
}
