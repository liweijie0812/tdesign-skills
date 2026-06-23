/**
 * TDesign TDesign React 示例：switch - status
 * 覆盖组件：Switch
 * 来源：组件库源码 packages/components/switch/_example/status.tsx
 */

import React from 'react';
import { Space, Switch } from 'tdesign-react';

export default function SwitchBasic() {
  return (
    <Space>
      <Switch size="large" defaultValue />
      <Switch size="large" defaultValue loading />
      <Switch size="large" disabled />
    </Space>
  );
}
