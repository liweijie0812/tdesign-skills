/**
 * TDesign TDesign React 示例：checkbox - link
 * 覆盖组件：Checkbox
 * 来源：组件库源码 packages/components/checkbox/_example/link.tsx
 */

import React, { useState } from 'react';
import { Button, Checkbox, Space } from 'tdesign-react';

export default function CheckboxControlledExample() {
  const [checked, setChecked] = useState(false);
  return (
    <Space direction="vertical">
      <Space>
        <Checkbox checked={checked}>腾讯云A</Checkbox>
        <Checkbox checked={checked}>腾讯云B</Checkbox>
        <Checkbox checked={checked}>腾讯云C</Checkbox>
      </Space>

      <Space>
        <Button onClick={() => setChecked(false)}>重置</Button>
        <Button style={{ marginLeft: 16 }} onClick={() => setChecked(true)}>
          全选
        </Button>
      </Space>
    </Space>
  );
}
