/**
 * TDesign TDesign React 示例：time-picker - keyboard
 * 覆盖组件：Time-picker
 * 来源：组件库源码 packages/components/time-picker/_example/keyboard.tsx
 */

import React from 'react';
import { TimePicker } from 'tdesign-react';

import type { TimePickerProps } from 'tdesign-react';

export default function KeyboardTimePicker() {
  const handleBlur: TimePickerProps['onBlur'] = (param) => {
    console.log(param, 'onBlur');
  };

  const handleInput: TimePickerProps['onInput'] = (param) => {
    console.log(param, 'onInput');
  };

  const handleFocus: TimePickerProps['onFocus'] = (param) => {
    console.log(param, 'onFocus');
  };

  return (
    <TimePicker
      defaultValue="12:08:00"
      format="HH:mm:ss"
      onBlur={handleBlur}
      onInput={handleInput}
      onFocus={handleFocus}
      allowInput
      clearable
    />
  );
}
