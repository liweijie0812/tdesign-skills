/**
 * TDesign TDesign Mobile React 示例：radio - base
 * 覆盖组件：Radio
 * 来源：组件库源码 src/radio/_example/base.tsx
 */

import React, { useState } from 'react';
import { Radio, RadioGroup } from 'tdesign-mobile-react';

export default function Base() {
  const [defaultValue, setDefaultValue] = useState('idx0');
  return (
    <RadioGroup value={defaultValue} onChange={(value: string) => setDefaultValue(value)}>
      <Radio label="单选" value="idx0"></Radio>
      <Radio label="单选" value="idx1"></Radio>
      <Radio label="单选标题多行单选标题多行单选标题多行单选标题多行单选标题多行" value="idx2"></Radio>
      <Radio
        label="单选"
        value="idx3"
        content="描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
      ></Radio>
    </RadioGroup>
  );
}
