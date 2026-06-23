/**
 * TDesign TDesign React 示例：popup - disabled
 * 覆盖组件：Popup
 * 来源：组件库源码 packages/components/popup/_example/disabled.tsx
 */

import React from 'react';
import { Button, Popup } from 'tdesign-react';

export default function Disabled() {
  return (
    <Popup trigger="hover" disabled showArrow content="这是一个弹出框">
      <Button>Hover me</Button>
    </Popup>
  );
}
