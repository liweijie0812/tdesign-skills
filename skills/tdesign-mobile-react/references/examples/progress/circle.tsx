/**
 * TDesign TDesign Mobile React 示例：progress - circle
 * 覆盖组件：Progress
 * 来源：组件库源码 src/progress/_example/circle.tsx
 */

import React from 'react';
import { Progress } from 'tdesign-mobile-react';

import './style/index.less';

export default function Circle() {
  return (
    <div className="example-progress">
      <div className="example-progress__item">
        <Progress theme="circle" percentage={30} />
      </div>
      <div className="example-progress__item">
        <Progress theme="circle" percentage={30} status="warning" />
      </div>
      <div className="example-progress__item">
        <Progress theme="circle" percentage={30} status="error" />
      </div>
      <div className="example-progress__item">
        <Progress theme="circle" percentage={100} status="success" />
      </div>
    </div>
  );
}
