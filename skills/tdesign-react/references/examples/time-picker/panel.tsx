/**
 * TDesign TDesign React 示例：time-picker - panel
 * 覆盖组件：Time-picker
 * 来源：组件库源码 packages/components/time-picker/_example/panel.tsx
 */

import React, { useState } from 'react';
import { TimePicker } from 'tdesign-react';

const { TimePickerPanel } = TimePicker;

function Panel() {
  const [value, setValue] = useState('');

  return <TimePickerPanel value={value} onChange={setValue} />;
}

export default Panel;
