/**
 * TDesign TDesign React 示例：switch - base
 * 覆盖组件：Switch
 * 来源：组件库源码 packages/components/switch/_example/base.tsx
 */

import React, { useState } from 'react';
import { Space, Switch } from 'tdesign-react';

export default function SwitchBasic() {
  const [checked, setChecked] = useState(true);

  const onChange = (value: boolean) => {
    console.log('value', value);
    setChecked(value);
  };

  return (
    <Space>
      <Switch size="large" />
      <Switch size="large" value={checked} onChange={onChange} />
    </Space>
  );
}
