/**
 * TDesign TDesign Mobile React 示例：stepper - min-max
 * 覆盖组件：Stepper
 * 来源：组件库源码 src/stepper/_example/min-max.tsx
 */

import React, { useState } from 'react';
import { Stepper } from 'tdesign-mobile-react';

export default function MinMax() {
  const [value, setValue] = useState(999);

  const onChange = ($event: number) => {
    setValue($event);
    console.log(`change to ${$event}`);
  };
  const onBlur = ($event: number) => {
    console.log(`blur to ${$event}`);
  };
  const onOverlimit = ($type: string) => {
    console.log(`onOverlimit ${$type}`);
  };

  return (
    <div className="stepper-example">
      <Stepper defaultValue={0} theme="filled" />

      <Stepper
        value={value}
        theme="filled"
        step={1}
        min={0}
        max={999}
        onOverlimit={onOverlimit}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
