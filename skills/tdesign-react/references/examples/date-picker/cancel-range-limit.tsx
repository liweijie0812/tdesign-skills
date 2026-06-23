/**
 * TDesign TDesign React 示例：date-picker - cancel-range-limit
 * 覆盖组件：Date-picker
 * 来源：组件库源码 packages/components/date-picker/_example/cancel-range-limit.tsx
 */

import React from 'react';
import { DateRangePicker, Space } from 'tdesign-react';

export default function CancelRangeLimitDatePicker() {
  return (
    <Space direction="vertical">
      <DateRangePicker cancelRangeSelectLimit={true} clearable={true} />
    </Space>
  );
}
