/**
 * TDesign TDesign React 示例：grid - gutter
 * 覆盖组件：Grid
 * 来源：组件库源码 packages/components/grid/_example/gutter.tsx
 */

import React from 'react';
import { Col, Row } from 'tdesign-react';

export default function SpaceGrid() {
  return (
    <>
      <Row gutter={16}>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32, xl: 32, xxl: 40 }}>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
      </Row>

      <Row gutter={[16, 24]}>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
        <Col span={3}>
          <div>col-3</div>
        </Col>
      </Row>
    </>
  );
}
