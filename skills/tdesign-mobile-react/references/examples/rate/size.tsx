/**
 * TDesign TDesign Mobile React 示例：rate - size
 * 覆盖组件：Rate
 * 来源：组件库源码 src/rate/_example/size.tsx
 */

import React from 'react';
import { Cell, CellGroup, Rate } from 'tdesign-mobile-react';

export default function Size() {
  return (
    <CellGroup className="rate-demo__size">
      <Cell title="大尺寸24" style={{ overflow: 'initial' }}>
        <Rate size="24" defaultValue={3} />
      </Cell>
      <Cell title="小尺寸20" style={{ overflow: 'initial' }}>
        <Rate size="20" defaultValue={3} />
      </Cell>
    </CellGroup>
  );
}
