/**
 * TDesign TDesign React 示例：color-picker - enable-alpha
 * 覆盖组件：Color-picker
 * 来源：组件库源码 packages/components/color-picker/_example/enable-alpha.tsx
 */

import React, { useState } from 'react';
import { ColorPickerPanel } from 'tdesign-react';

import type { ColorPickerProps } from 'tdesign-react';

export default function EnableAlpha() {
  const [value, setValue] = useState('#0052D9CC');

  const handleChange: ColorPickerProps['onChange'] = (value) => {
    setValue(value);
  };

  return <ColorPickerPanel enableAlpha value={value} format="HEX" onChange={handleChange} />;
}
