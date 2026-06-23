/**
 * TDesign TDesign React 示例：grid - base
 * 覆盖组件：Grid
 * 来源：组件库源码 packages/components/grid/_example/base.tsx
 */

import React from 'react';
import { Col, Row } from 'tdesign-react';

const demoCols = [
  Array(12).fill(1),
  Array(6).fill(2),
  Array(4).fill(3),
  Array(3).fill(4),
  Array(2).fill(6),
  Array(1).fill(12),
];

export default function BasicGrid() {
  return (
    <>
      {demoCols.map((cols, i) => (
        <Row key={i}>
          {cols.map((col, j) => (
            <Col span={col} key={j}>
              <div>{col}</div>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
}
