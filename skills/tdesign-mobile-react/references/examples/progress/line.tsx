/**
 * TDesign TDesign Mobile React 示例：progress - line
 * 覆盖组件：Progress
 * 来源：组件库源码 src/progress/_example/line.tsx
 */

import React from 'react';
import { Progress } from 'tdesign-mobile-react';

import './style/index.less';

export default function Line() {
  return (
    <div className="example-progress">
      <div className="example-progress__item">
        <Progress percentage={78} />
      </div>
      <div className="example-progress__item">
        <Progress percentage={80} status="warning" />
      </div>
      <div className="example-progress__item">
        <Progress percentage={80} status="error" />
      </div>
      <div className="example-progress__item">
        <Progress percentage={80} status="success" />
      </div>
      <div className="example-progress__item">
        <Progress percentage={78} color={['#0052D9', '#2BA471']} status="active" />
      </div>
    </div>
  );
}
