/**
 * TDesign TDesign React 示例：color-picker - status-disabled
 * 覆盖组件：Color-picker
 * 来源：组件库源码 packages/components/color-picker/_example/status-disabled.tsx
 */

import React from 'react';
import { ColorPicker } from 'tdesign-react';

export default function StatusDisabled() {
  const color = '#0052d9';

  return <ColorPicker defaultValue={color} disabled />;
}
