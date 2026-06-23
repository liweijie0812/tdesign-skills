/**
 * TDesign TDesign React 示例：select - base
 * 覆盖组件：Select
 * 来源：组件库源码 packages/components/select/_example/base.tsx
 */

import React, { useState } from 'react';
import { Select, Tooltip } from 'tdesign-react';

export default function SingleSelect() {
  const [value, setValue] = useState('');
  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: '40%' }}
      clearable
      options={[
        { label: '架构云', value: '1', title: '架构云选项' },
        { label: '大数据', value: '2' },
        { label: '区块链', value: '3' },
        { label: '物联网', value: '4', disabled: true },
        {
          label: '人工智能',
          value: '5',
          content: (
            <Tooltip content="人工智能">
              <span>人工智能（新）</span>
            </Tooltip>
          ),
          title: null,
        },
      ]}
    />
  );
}
