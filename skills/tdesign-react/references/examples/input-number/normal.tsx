/**
 * TDesign TDesign React 示例：input-number - normal
 * 覆盖组件：Input-number
 * 来源：组件库源码 packages/components/input-number/_example/normal.tsx
 */

import React from 'react';
import { InputNumber, Space } from 'tdesign-react';

export default function InputNumberExample() {
  return (
    <Space direction="vertical">
      <InputNumber defaultValue={10} onChange={console.log} theme="normal" max={15} min={-2} />
      <InputNumber theme="normal" align="right" label="机器：" suffix="台" />
      <InputNumber
        theme="normal"
        align="right"
        defaultValue={10}
        onChange={console.log}
        label={<span>金额：</span>}
        suffix={<span>元</span>}
      />
    </Space>
  );
}
