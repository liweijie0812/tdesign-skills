/**
 * TDesign TDesign Mobile React 示例：layout - offset
 * 覆盖组件：Layout
 * 来源：组件库源码 src/layout/_example/offset.tsx
 */

import React from 'react';
import { Col, Row } from 'tdesign-mobile-react';

export default function () {
  return (
    <div className="tdesign-mobile-demo">
      <Row gutter="16">
        <Col span="8">
          <div className="dark">col-8</div>
        </Col>
        <Col span="8">
          <div className="light">col-8</div>
        </Col>
        <Col span="8">
          <div className="dark">col-8</div>
        </Col>
      </Row>
    </div>
  );
}
