/**
 * TDesign TDesign React 示例：tree - empty
 * 覆盖组件：Tree
 * 来源：组件库源码 packages/components/tree/_example/empty.tsx
 */

import React from 'react';
import { Space, Tree } from 'tdesign-react';

import type { TreeProps } from 'tdesign-react';

export default () => {
  const empty: TreeProps['empty'] = <div>😊 空数据（ empty props ）</div>;

  return (
    <Space direction="vertical">
      <Tree data={[]} />

      <Tree data={[]} empty="😊 空数据（string）" />

      <Tree data={[]} empty={empty} />
    </Space>
  );
};
