/**
 * TDesign TDesign React 示例：slider - min-and-max
 * 覆盖组件：Slider
 * 来源：组件库源码 packages/components/slider/_example/min-and-max.tsx
 */

import React, { useState } from 'react';
import { Slider } from 'tdesign-react';

import type { SliderValue } from 'tdesign-react';

const marks = {
  10: 'min:10',
  30: 'max:30',
};

const MinAndMaxSlider = () => {
  const [value, setValue] = useState<SliderValue>(10);
  const [rangeValue, setRangeValue] = useState<SliderValue>([10, 20]);

  return (
    <>
      <Slider min={10} max={30} marks={marks} style={{ marginBottom: 50 }} value={value} onChange={setValue}></Slider>
      <Slider min={10} max={30} marks={marks} value={rangeValue} onChange={setRangeValue} range></Slider>
    </>
  );
};

export default MinAndMaxSlider;
