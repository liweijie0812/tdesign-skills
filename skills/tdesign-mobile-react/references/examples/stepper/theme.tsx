/**
 * TDesign TDesign Mobile React 示例：stepper - theme
 * 覆盖组件：Stepper
 * 来源：组件库源码 src/stepper/_example/theme.tsx
 */

import React from 'react';
import { Stepper } from 'tdesign-mobile-react';

export default function theme() {
  return (
    <div className="stepper-example">
      <Stepper defaultValue={3} theme={'filled'}></Stepper>
      <Stepper defaultValue={3} theme={'outline'}></Stepper>
      <Stepper defaultValue={3}></Stepper>
    </div>
  );
}
