/**
 * TDesign TDesign Mobile React 示例：stepper - base
 * 覆盖组件：Stepper
 * 来源：组件库源码 src/stepper/_example/base.tsx
 */

import React from 'react';
import { Stepper } from 'tdesign-mobile-react';

export default function Base() {
  return (
    <div className="stepper-example">
      <Stepper theme="filled" defaultValue={3}></Stepper>
    </div>
  );
}
