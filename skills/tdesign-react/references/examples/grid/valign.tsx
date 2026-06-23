/**
 * TDesign TDesign React 示例：grid - valign
 * 覆盖组件：Grid
 * 来源：组件库源码 packages/components/grid/_example/valign.tsx
 */

import React from 'react';
import { Col, Row } from 'tdesign-react';

export default function OrderGrid() {
  return (
    <>
      <p>align top</p>
      <Row justify="center" align="top">
        <Col span={3}>
          <div style={{ height: 80 }}>col-3</div>
        </Col>
        <Col span={3}>
          <div style={{ height: 40 }}>col-3</div>
        </Col>
        <Col span={3}>
          <div style={{ height: 80 }}>col-3</div>
        </Col>
        <Col span={3}>
          <div style={{ height: 40 }}>col-3</div>
        </Col>
      </Row>

      <p>Align Middle</p>
      <Row justify="space-around" align="middle">
        <Col span={3}>
          <div style={{ height: 80 }}>col-3</div>
        </Col>
        <Col span={3}>
          <div style={{ height: 40 }}>col-3</div>
        </Col>
        <Col span={3}>
          <div style={{ height: 80 }}>col-3</div>
        </Col>
        <Col span={3}>
          <div style={{ height: 40 }}>col-3</div>
        </Col>
      </Row>

      <p>Align Bottom</p>
      <Row justify="space-between" align="bottom">
        <Col span={3}>
          <div style={{ height: 80 }}>col-3</div>
        </Col>
        <Col span={3}>
          <div style={{ height: 40 }}>col-3</div>
        </Col>
        <Col span={3}>
          <div style={{ height: 80 }}>col-3</div>
        </Col>
        <Col span={3}>
          <div style={{ height: 40 }}>col-3</div>
        </Col>
      </Row>
    </>
  );
}
