/**
 * TDesign TDesign React 示例：transfer - empty
 * 覆盖组件：Transfer
 * 来源：组件库源码 packages/components/transfer/_example/empty.tsx
 */

import React from 'react';
import { Transfer } from 'tdesign-react';

export default function BaseExample() {
  return (
    <div className="tdesign-demo-block-column">
      <p>默认暂无数据</p>
      <Transfer></Transfer>
      <p>自定义暂无数据</p>
      <Transfer
        empty={[
          'No Source',
          <div key="empty" className="t-transfer__empty">
            No Target
          </div>,
        ]}
      ></Transfer>
    </div>
  );
}
