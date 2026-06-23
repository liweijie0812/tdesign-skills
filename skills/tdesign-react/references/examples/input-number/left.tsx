/**
 * TDesign TDesign React 示例：input-number - left
 * 覆盖组件：Input-number
 * 来源：组件库源码 packages/components/input-number/_example/left.tsx
 */

import React from 'react';
import { InputNumber } from 'tdesign-react';

export default function InputNumberExample() {
  return <InputNumber defaultValue={5} theme="column" onChange={(v) => console.log(v)} />;
}
