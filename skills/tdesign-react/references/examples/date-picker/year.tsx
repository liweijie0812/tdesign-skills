/**
 * TDesign TDesign React 示例：date-picker - year
 * 覆盖组件：Date-picker
 * 来源：组件库源码 packages/components/date-picker/_example/year.tsx
 */

import React from 'react';
import { DatePicker, DateRangePicker, Space } from 'tdesign-react';

import type { DatePickerProps, DateRangePickerProps } from 'tdesign-react';

export default function YearDatePicker() {
  const handleChange: DatePickerProps['onChange'] = (value) => {
    console.log(value);
  };

  const handleRangeChange: DateRangePickerProps['onChange'] = (value) => {
    console.log(value);
  };

  return (
    <Space direction="vertical">
      <DatePicker mode="year" clearable allowInput onChange={handleChange} />
      <DateRangePicker mode="year" clearable allowInput onChange={handleRangeChange} />
    </Space>
  );
}
