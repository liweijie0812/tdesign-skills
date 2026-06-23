/**
 * TDesign TDesign React 示例：input-number - format
 * 覆盖组件：Input-number
 * 来源：组件库源码 packages/components/input-number/_example/format.tsx
 */

import React, { useState } from 'react';
import { InputNumber, Space } from 'tdesign-react';

import type { InputNumberValue } from 'tdesign-react';

export default function InputNumberExample() {
  const [value, setValue] = useState<InputNumberValue>(0);
  const [value1, setValue1] = useState<InputNumberValue>(0);

  return (
    <Space direction="vertical">
      <InputNumber
        max={15}
        min={-12}
        step={1.2}
        format={(value) => `${value} %`}
        value={value}
        onChange={setValue}
        style={{ width: 250 }}
      />
      <InputNumber
        decimalPlaces={2}
        format={(_, { fixedNumber }) => `${fixedNumber} %`}
        value={value1}
        onChange={setValue1}
        style={{ width: 250 }}
      />
    </Space>
  );
}
