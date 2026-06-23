/**
 * TDesign TDesign React 示例：color-picker - trigger
 * 覆盖组件：Color-picker
 * 来源：组件库源码 packages/components/color-picker/_example/trigger.tsx
 */

import React from 'react';
import { ColorPicker } from 'tdesign-react';

export default function PanelExample() {
  return <ColorPicker defaultValue={'#0052d9'} showPrimaryColorPreview={false} format="HEX" />;
}
