/**
 * TDesign TDesign Mobile React 示例：switch - size
 * 覆盖组件：Switch
 * 来源：组件库源码 src/switch/_example/size.tsx
 */

import React from 'react';
import { Switch, Cell } from 'tdesign-mobile-react';

export default function SwitchSize() {
  return (
    <>
      <Cell title="大尺寸 32" rightIcon={<Switch defaultValue size="large" />}></Cell>
      <Cell title="中尺寸 28" rightIcon={<Switch defaultValue />}></Cell>
      <Cell title="小尺寸 24" rightIcon={<Switch defaultValue size="small" />}></Cell>
    </>
  );
}
