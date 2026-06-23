/**
 * TDesign TDesign React 示例：select - prefix
 * 覆盖组件：Select
 * 来源：组件库源码 packages/components/select/_example/prefix.tsx
 */

import React, { useState } from 'react';
import { BrowseIcon } from 'tdesign-icons-react';
import { Select } from 'tdesign-react';

const SelectPrefix = () => {
  const [value, setValue] = useState('');
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: '40%' }}
      prefixIcon={<BrowseIcon style={{ marginRight: '8px' }} />}
      options={[
        { label: '选项一', value: '1' },
        { label: '选项二', value: '2' },
        { label: '选项三', value: '3' },
      ]}
    />
  );
};

export default SelectPrefix;
