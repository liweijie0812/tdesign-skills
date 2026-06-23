/**
 * TDesign TDesign React 示例：time-picker - range
 * 覆盖组件：Time-picker
 * 来源：组件库源码 packages/components/time-picker/_example/range.tsx
 */

import React from 'react';
import { TimePicker } from 'tdesign-react';

const { TimeRangePicker } = TimePicker;

export default function RangeTimePicker() {
  return (
    <TimeRangePicker
      clearable
      format="HH:mm:ss"
      defaultValue={undefined}
      allowInput
      placeholder={['开始时间', '结束时间']}
    />
  );
}
