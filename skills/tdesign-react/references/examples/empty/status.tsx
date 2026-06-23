/**
 * TDesign TDesign React 示例：empty - status
 * 覆盖组件：Empty
 * 来源：组件库源码 packages/components/empty/_example/status.tsx
 */

import React from 'react';
import { Col, Empty, Row } from 'tdesign-react';

export default function StatusExample() {
  return (
    <Row gutter={40}>
      <Col>
        <Empty type="empty" />
      </Col>
      <Col>
        <Empty type="maintenance" />
      </Col>
      <Col>
        <Empty type="network-error" />
      </Col>
      <Col>
        <Empty type="success" />
      </Col>
      <Col>
        <Empty type="fail" />
      </Col>
    </Row>
  );
}
