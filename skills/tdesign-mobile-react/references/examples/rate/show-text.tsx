/**
 * TDesign TDesign Mobile React 示例：rate - show-text
 * 覆盖组件：Rate
 * 来源：组件库源码 src/rate/_example/show-text.tsx
 */

import React from 'react';
import { Cell, CellGroup, Rate } from 'tdesign-mobile-react';

export default function ShowText() {
  return (
    <CellGroup className="rate-demo__show-text">
      <Cell title="带描述评分" style={{ overflow: 'initial' }}>
        <Rate defaultValue={1} showText={true} texts={['很差', '差', '一般', '好评', '优秀']} />
      </Cell>
      <Cell title="带描述评分" style={{ overflow: 'initial' }}>
        <Rate defaultValue={5} showText={true} />
      </Cell>
      <Cell title="带描述评分" style={{ overflow: 'initial' }}>
        <Rate defaultValue={0} showText={true} />
      </Cell>
    </CellGroup>
  );
}
