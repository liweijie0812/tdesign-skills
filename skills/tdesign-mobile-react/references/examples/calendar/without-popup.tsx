/**
 * TDesign TDesign Mobile React 示例：calendar - without-popup
 * 覆盖组件：Calendar
 * 来源：组件库源码 src/calendar/_example/without-popup.tsx
 */

import React, { useState } from 'react';
import { Calendar } from 'tdesign-mobile-react';

export default function () {
  const [visible, setVisible] = useState(false);

  const handleConfirm = (val: Date) => {
    console.log(val);
    setVisible(false);
  };
  const handleSelect = (val: Date) => {
    console.log(val);
  };
  const onClose = (trigger: string) => {
    setVisible(false);
    console.log('closed by', trigger);
  };

  return (
    <Calendar
      usePopup={false}
      visible={visible}
      onConfirm={handleConfirm}
      onSelect={handleSelect}
      onClose={onClose}
    ></Calendar>
  );
}
