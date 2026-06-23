/**
 * TDesign TDesign Mobile React 示例：rate - color
 * 覆盖组件：Rate
 * 来源：组件库源码 src/rate/_example/color.tsx
 */

import React from 'react';
import { Cell, CellGroup, Rate } from 'tdesign-mobile-react';

export default function Color() {
  return (
    <CellGroup className="rate-demo__color">
      <Cell title="选中及未选中颜色" style={{ overflow: 'initial' }}>
        <Rate defaultValue={3} color={['#FFC51C', '#E8E8E8']} allowHalf={true} />
      </Cell>
      <Cell title="仅选中颜色" style={{ overflow: 'initial' }}>
        <Rate defaultValue={3} color="#00A870" allowHalf={true} />
      </Cell>
    </CellGroup>
  );
}
