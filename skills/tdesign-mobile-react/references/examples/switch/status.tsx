/**
 * TDesign TDesign Mobile React 示例：switch - status
 * 覆盖组件：Switch
 * 来源：组件库源码 src/switch/_example/status.tsx
 */

import React from 'react';
import { Switch, Cell } from 'tdesign-mobile-react';

export default function SwitchStatus() {
  return (
    <>
      <Cell title="加载状态" rightIcon={<Switch loading />}></Cell>
      <Cell title="开关开启禁用" note={<Switch defaultValue loading />}></Cell>

      <div className="demo__title">禁用状态</div>

      <Cell title="禁用状态" note={<Switch disabled />}></Cell>
      <Cell title="禁用状态" note={<Switch disabled value={true} />}></Cell>
    </>
  );
}
