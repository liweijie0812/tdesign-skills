/**
 * TDesign TDesign Mobile React 示例：slider - range
 * 覆盖组件：Slider
 * 来源：组件库源码 src/slider/_example/range.tsx
 */

import React from 'react';
import { Slider } from 'tdesign-mobile-react';

export default function RangDemo() {
  const onChange = (value: number | number[]) => {
    console.log(`change to ${value}`);
  };
  return (
    <div className="wrapper-base">
      <Slider range defaultValue={[30, 70]} onChange={onChange} />
    </div>
  );
}
