/**
 * TDesign TDesign React 示例：time-picker - twelve-hour-meridian
 * 覆盖组件：Time-picker
 * 来源：组件库源码 packages/components/time-picker/_example/twelve-hour-meridian.tsx
 */

import React, { useState } from 'react';
import { TimePicker } from 'tdesign-react';

export default function TwelveHourTimePicker() {
  const [value, setValue] = useState(null);
  const handleValueChange = (v: string) => {
    setValue(v);
  };
  return <TimePicker format="hh:mm:ss A" value={value} onChange={handleValueChange} />;
}
