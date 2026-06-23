/**
 * TDesign TDesign Mobile React 示例：color-picker - multiple
 * 覆盖组件：Color-picker
 * 来源：组件库源码 src/color-picker/_example/multiple.tsx
 */

import React from 'react';
import { ColorObject, ColorPicker } from 'tdesign-mobile-react';

export default function () {
  const onChange = (value: string) => {
    console.log('change', value);
  };
  const onPaletteBarChange = (value: { color: ColorObject }) => {
    console.log('onPaletteBarChange', value);
  };
  return <ColorPicker enableAlpha type="multiple" onChange={onChange} onPaletteBarChange={onPaletteBarChange} />;
}
