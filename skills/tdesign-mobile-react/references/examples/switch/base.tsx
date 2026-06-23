/**
 * TDesign TDesign Mobile React 示例：switch - base
 * 覆盖组件：Switch
 * 来源：组件库源码 src/switch/_example/base.tsx
 */

import React, { useState } from 'react';
import { Switch, Cell } from 'tdesign-mobile-react';
import type { SwitchValue } from 'tdesign-mobile-react';

export default function SwitchBase() {
  const [checked, setChecked] = useState<SwitchValue>(1);

  const onChange = (value: SwitchValue) => {
    console.log('value', value);
    setChecked(value);
  };

  return (
    <>
      <Cell title="基础开关" rightIcon={<Switch value={checked} customValue={[1, 0]} onChange={onChange} />}></Cell>
    </>
  );
}
