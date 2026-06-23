/**
 * TDesign TDesign React 示例：date-picker - custom-icon
 * 覆盖组件：Date-picker
 * 来源：组件库源码 packages/components/date-picker/_example/custom-icon.tsx
 */

import React from 'react';
import { BrowseIcon, LockOnIcon } from 'tdesign-icons-react';
import { DatePicker, Space } from 'tdesign-react';

import type { DatePickerProps } from 'tdesign-react';

export default function YearDatePicker() {
  const handleChange: DatePickerProps['onChange'] = (value) => {
    console.log(value);
  };

  return (
    <Space>
      <DatePicker prefixIcon={<BrowseIcon />} suffixIcon={<LockOnIcon />} onChange={handleChange} />
    </Space>
  );
}
