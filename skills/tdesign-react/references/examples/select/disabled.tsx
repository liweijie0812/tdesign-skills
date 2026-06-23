/**
 * TDesign TDesign React 示例：select - disabled
 * 覆盖组件：Select
 * 来源：组件库源码 packages/components/select/_example/disabled.tsx
 */

import React from 'react';
import { Select } from 'tdesign-react';

const { Option } = Select;

const DisabledSelect = () => (
  <Select value="apple" style={{ width: '40%' }} disabled>
    <Option key="apple" label="Apple" value="apple" />
  </Select>
);

export default DisabledSelect;
