/**
 * TDesign TDesign React 示例：time-picker - hide-clear-button
 * 覆盖组件：Time-picker
 * 来源：组件库源码 packages/components/time-picker/_example/hide-clear-button.tsx
 */

import React from 'react';
import { Space, TimePicker } from 'tdesign-react';

export default function HmTimePicker() {
  return (
    <Space direction="vertical">
      <h3>禁止清空</h3>
      <TimePicker defaultValue="12:00:00" />
      <h3>允许清空</h3>
      <TimePicker defaultValue="12:00:00" clearable={true} />
    </Space>
  );
}
