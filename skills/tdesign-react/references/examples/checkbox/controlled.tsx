/**
 * TDesign TDesign React 示例：checkbox - controlled
 * 覆盖组件：Checkbox
 * 来源：组件库源码 packages/components/checkbox/_example/controlled.tsx
 */

import React, { useState } from 'react';
import { Checkbox, Space } from 'tdesign-react';

export default function CheckboxExample() {
  const [value, setValue] = useState(false);

  return (
    <Space>
      <Checkbox checked={value} onChange={setValue}>
        受控属性
      </Checkbox>
      <Checkbox defaultChecked={true}>非受控属性</Checkbox>
    </Space>
  );
}
