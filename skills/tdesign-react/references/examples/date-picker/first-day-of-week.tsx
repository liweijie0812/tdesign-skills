/**
 * TDesign TDesign React 示例：date-picker - first-day-of-week
 * 覆盖组件：Date-picker
 * 来源：组件库源码 packages/components/date-picker/_example/first-day-of-week.tsx
 */

import React, { useState } from 'react';
import { DatePicker, Radio, Space } from 'tdesign-react';

export default function YearDatePicker() {
  const [startWeek, setStartWeek] = useState(1);

  return (
    <Space direction="vertical">
      <Radio.Group variant="default-filled" value={startWeek} onChange={(value: number) => setStartWeek(value)}>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Radio.Button key={i} value={i}>
            {i}
          </Radio.Button>
        ))}
      </Radio.Group>

      <DatePicker firstDayOfWeek={startWeek} />
    </Space>
  );
}
