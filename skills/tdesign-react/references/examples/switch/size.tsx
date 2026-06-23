/**
 * TDesign TDesign React 示例：switch - size
 * 覆盖组件：Switch
 * 来源：组件库源码 packages/components/switch/_example/size.tsx
 */

import React from 'react';
import { Space, Switch } from 'tdesign-react';

export default function SwitchBasic() {
  return (
    <Space>
      <Switch size="large" defaultValue />
      <Switch />
      <Switch size="small" />
    </Space>
  );
}
