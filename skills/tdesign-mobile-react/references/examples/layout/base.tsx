/**
 * TDesign TDesign Mobile React 示例：layout - base
 * 覆盖组件：Layout
 * 来源：组件库源码 src/layout/_example/base.tsx
 */

import React from 'react';
import { Col, Row } from 'tdesign-mobile-react';

export default function () {
  return (
    <div className="tdesign-mobile-demo">
      <Row>
        <Col span="8" className="dark">
          col-8
        </Col>
        <Col span="8" className="light">
          col-8
        </Col>
        <Col span="8" className="dark">
          col-8
        </Col>
      </Row>

      <Row>
        <Col span="4" className="dark">
          col-4
        </Col>
        <Col span="16" offset="4" className="light">
          col-16 col-offset-4
        </Col>
      </Row>

      <Row>
        <Col offset="12" span="12" className="dark">
          col-12 col-offset-12
        </Col>
      </Row>
    </div>
  );
}
