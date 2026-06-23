/**
 * TDesign TDesign React 示例：calendar - week
 * 覆盖组件：Calendar
 * 来源：组件库源码 packages/components/calendar/_example/week.tsx
 */

import React from 'react';
import { Calendar } from 'tdesign-react';

import type { CalendarWeek } from 'tdesign-react';

export default function CalendarExample() {
  const getWeekText = React.useCallback((calendarWeek: CalendarWeek) => {
    const output = `星期${calendarWeek.day}`;
    return output;
  }, []);

  return <Calendar week={(calendarWeek) => <div>{getWeekText(calendarWeek)}</div>} />;
}
