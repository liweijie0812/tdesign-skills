/**
 * TDesign TDesign Mobile React 示例：radio - status
 * 覆盖组件：Radio
 * 来源：组件库源码 src/radio/_example/status.tsx
 */

import React from 'react';
import { Radio } from 'tdesign-mobile-react';

export default function () {
  const options = [
    {
      value: '1',
      checked: true,
      label: '选项禁用-已选',
    },
    {
      value: '2',
      checked: false,
      label: '选项禁用-默认',
    },
  ];
  return (
    <div className="example-radio">
      {options.map((opt) => (
        <Radio
          className="example-radio__item"
          defaultChecked={opt.checked}
          allowUncheck
          label={opt.label}
          disabled
          key={opt.value}
        ></Radio>
      ))}
    </div>
  );
}
