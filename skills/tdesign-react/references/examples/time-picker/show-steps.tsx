/**
 * TDesign TDesign React 示例：time-picker - show-steps
 * 覆盖组件：Time-picker
 * 来源：组件库源码 packages/components/time-picker/_example/show-steps.tsx
 */

import React from 'react';
import { TimePicker } from 'tdesign-react';

export default function ShowStepsTimePicker() {
  return <TimePicker steps={[1, 5]} format="HH:mm" />;
}
