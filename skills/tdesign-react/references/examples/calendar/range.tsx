/**
 * TDesign TDesign React 示例：calendar - range
 * 覆盖组件：Calendar
 * 来源：组件库源码 packages/components/calendar/_example/range.tsx
 */

import React from 'react';
import { Calendar } from 'tdesign-react';

export default function CalendarExample() {
  const range = [
    '2018-08', // new Date(2018, 7),
    '2027-04', // new Date(2027, 3),
  ];
  return <Calendar range={range} />;
}
