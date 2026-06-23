/**
 * TDesign TDesign React 示例：select - options
 * 覆盖组件：Select
 * 来源：组件库源码 packages/components/select/_example/options.tsx
 */

import React, { useState } from 'react';
import { Select } from 'tdesign-react';

const SelectWithOptions = () => {
  const [value, setValue] = useState('apple');
  const onChange = (value: string) => {
    setValue(value);
  };
  const options = [
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
  ];
  return <Select value={value} onChange={onChange} style={{ width: '40%' }} options={options} filterable />;
};

export default SelectWithOptions;
