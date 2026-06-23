/**
 * TDesign TDesign Mobile React 示例：switch - color
 * 覆盖组件：Switch
 * 来源：组件库源码 src/switch/_example/color.tsx
 */

import React from 'react';
import { Switch, Cell } from 'tdesign-mobile-react';

export default function SwitchColor() {
  return (
    <>
      <Cell title="自定义颜色开关" rightIcon={<Switch defaultValue={true} className="custom-color" />}></Cell>
    </>
  );
}
