/**
 * TDesign TDesign Mobile React 示例：stepper - size
 * 覆盖组件：Stepper
 * 来源：组件库源码 src/stepper/_example/size.tsx
 */

import React, { useState } from 'react';
import { Stepper } from 'tdesign-mobile-react';

export default function StepperSize() {
  const [value, setValue] = useState(3);

  const handleChange = ($event: number) => {
    setValue($event);
    console.log(`change to ${$event}`);
  };

  return (
    <div className="stepper-example">
      <Stepper value={value} size={'large'} theme={'filled'} onChange={handleChange}></Stepper>
      <Stepper defaultValue={3} max={99} theme={'filled'}></Stepper>
      <Stepper defaultValue={3} size={'small'} theme={'filled'}></Stepper>
    </div>
  );
}
