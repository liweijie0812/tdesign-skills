/**
 * TDesign TDesign React 示例：input-number - default
 * 覆盖组件：Input-number
 * 来源：组件库源码 packages/components/input-number/_example/default.tsx
 */

import React from 'react';
import { InputNumber } from 'tdesign-react';

export default function InputNumberExample() {
  return <InputNumber max={15} min={-5} defaultValue={1} />;
}
