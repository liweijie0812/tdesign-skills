/**
 * TDesign TDesign React 示例：calendar - value
 * 覆盖组件：Calendar
 * 来源：组件库源码 packages/components/calendar/_example/value.tsx
 */

import React from 'react';
import { Calendar } from 'tdesign-react';

export default function CalendarExample() {
  const value = '1998-11-11'; // new Date(1998, 10, 11)
  return <Calendar value={value} />;
}
