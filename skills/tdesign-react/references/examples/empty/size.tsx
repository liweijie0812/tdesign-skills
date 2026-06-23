/**
 * TDesign TDesign React 示例：empty - size
 * 覆盖组件：Empty
 * 来源：组件库源码 packages/components/empty/_example/size.tsx
 */

import React, { useState } from 'react';
import { Col, Empty, Radio, Row, Space } from 'tdesign-react';

type SIZE = 'small' | 'medium' | 'large';

const options = [
  {
    label: 'small',
    value: 'small',
  },
  {
    label: 'medium',
    value: 'medium',
  },
  {
    label: 'large',
    value: 'large',
  },
];

export default function StatusExample() {
  const [size, setSize] = useState<SIZE>('medium');
  return (
    <Space direction="vertical">
      <Radio.Group variant="default-filled" options={options} value={size} onChange={(value: SIZE) => setSize(value)} />
      <div style={{ marginTop: '20px', height: '100px' }}>
        <Row gutter={40}>
          <Col>
            <Empty type="empty" size={size} />
          </Col>
          <Col>
            <Empty type="maintenance" size={size} />
          </Col>
          <Col>
            <Empty type="network-error" size={size} />
          </Col>
          <Col>
            <Empty type="success" size={size} />
          </Col>
          <Col>
            <Empty type="fail" size={size} />
          </Col>
        </Row>
      </div>
    </Space>
  );
}
