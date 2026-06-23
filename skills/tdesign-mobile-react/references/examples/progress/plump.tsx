/**
 * TDesign TDesign Mobile React 示例：progress - plump
 * 覆盖组件：Progress
 * 来源：组件库源码 src/progress/_example/plump.tsx
 */

import React from 'react';
import { Progress } from 'tdesign-mobile-react';

import './style/index.less';

export default function Plump() {
  return (
    <div className="example-progress">
      <div className="example-progress__item">
        <Progress theme="plump" percentage={80} />
      </div>
      <div className="example-progress__item">
        <Progress theme="plump" percentage={100} />
      </div>
      <div className="example-progress__item">
        <Progress theme="plump" percentage={80} status="warning" />
      </div>
      <div className="example-progress__item">
        <Progress theme="plump" percentage={80} status="error" />
      </div>
      <div className="example-progress__item">
        <Progress theme="plump" percentage={80} color={['#0052D9', '#2BA471']} status="active" />
      </div>
    </div>
  );
}
