/**
 * TDesign TDesign React 示例：skeleton - animation
 * 覆盖组件：Skeleton
 * 来源：组件库源码 packages/components/skeleton/_example/animation.tsx
 */

import React from 'react';
import { Skeleton } from 'tdesign-react';

const animations = [
  { label: '渐变加载动画', value: 'gradient' },
  { label: '闪烁加载动画', value: 'flashed' },
] as const;

export default function AnimationSkeleton() {
  return (
    <div className="t-skeleton-demo">
      {animations.map((animation, index) => (
        <div className="t-skeleton-demo-card" key={`animation-${index}`}>
          <div className="header">{animation.label}</div>
          <div className="content">
            <Skeleton animation={animation.value}></Skeleton>
          </div>
        </div>
      ))}
    </div>
  );
}
