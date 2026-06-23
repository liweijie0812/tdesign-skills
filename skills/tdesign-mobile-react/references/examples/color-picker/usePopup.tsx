/**
 * TDesign TDesign Mobile React 示例：color-picker - usePopup
 * 覆盖组件：Color-picker
 * 来源：组件库源码 src/color-picker/_example/usePopup.tsx
 */

import React, { useState } from 'react';
import { ColorObject, ColorPicker, ColorPickerTrigger, Popup } from 'tdesign-mobile-react';
import Button from 'tdesign-mobile-react/button';

export default function () {
  const [visible, setVisible] = useState<boolean>(false);
  const onChange = (value: string) => {
    console.log('change', value);
  };
  const onClose = (visible: boolean, target: ColorPickerTrigger) => {
    console.log('close', visible, target);
    if (!visible) {
      setVisible(false);
    }
  };
  const onPaletteBarChange = (e: { color: ColorObject }) => {
    console.log('onPaletteBarChange', e.color);
  };
  const handlePopup = () => {
    setVisible(true);
  };
  return (
    <>
      <Popup showOverlay placement="bottom" visible={visible} onVisibleChange={onClose}>
        <ColorPicker enableAlpha fixed type="multiple" onChange={onChange} onPaletteBarChange={onPaletteBarChange} />
      </Popup>
      <div className="row">
        <Button block size="large" variant="outline" theme="primary" onClick={handlePopup}>
          弹窗形式的颜色选择器
        </Button>
      </div>
    </>
  );
}
