/**
 * TDesign TDesign React 示例：date-picker - base
 * 覆盖组件：Date-picker
 * 来源：组件库源码 packages/components/date-picker/_example/base.tsx
 */

import React from 'react';
import { DatePicker, Space } from 'tdesign-react';

import type { DatePickerProps } from 'tdesign-react';

export default function YearDatePicker() {
  const handleChange: DatePickerProps['onChange'] = (value, context) => {
    console.log('onChange:', value, context);
    console.log('timestamp', context.dayjsValue.valueOf());
    console.log('YYYYMMDD', context.dayjsValue.format('YYYYMMDD'));
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={handleChange} />
      <DatePicker placeholder="可清除、可输入的日期选择器" onChange={handleChange} clearable allowInput />
    </Space>
  );
}
