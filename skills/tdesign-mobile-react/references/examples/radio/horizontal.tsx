/**
 * TDesign TDesign Mobile React 示例：radio - horizontal
 * 覆盖组件：Radio
 * 来源：组件库源码 src/radio/_example/horizontal.tsx
 */

import React, { useState } from 'react';
import { Radio, RadioGroup } from 'tdesign-mobile-react';

export default function Base() {
  const [defaultValue, setDefaultValue] = useState('idx0');
  return (
    <RadioGroup value={defaultValue} className="box horizontal" onChange={(value: string) => setDefaultValue(value)}>
      <Radio block={false} label="单选标题" value="idx0"></Radio>
      <Radio block={false} label="单选标题" value="idx1"></Radio>
      <Radio block={false} label="上限四字" value="idx2"></Radio>
    </RadioGroup>
  );
}
