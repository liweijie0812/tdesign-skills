/**
 * TDesign TDesign React 示例：color-picker - status-readonly
 * 覆盖组件：Color-picker
 * 来源：组件库源码 packages/components/color-picker/_example/status-readonly.tsx
 */

import React from 'react';
import { ColorPickerPanel } from 'tdesign-react';

export default function StatusReadonly() {
  const color = '#0052d9';

  return <ColorPickerPanel defaultValue={color} disabled />;
}
