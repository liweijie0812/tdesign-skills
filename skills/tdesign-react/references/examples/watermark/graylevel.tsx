/**
 * TDesign TDesign React 示例：watermark - graylevel
 * 覆盖组件：Watermark
 * 来源：组件库源码 packages/components/watermark/_example/graylevel.tsx
 */

import React from 'react';
import { Watermark } from 'tdesign-react';

export default function GrayscaleWatermark() {
  return (
    <Watermark
      watermarkContent={{
        url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png',
        isGrayscale: true,
      }}
      x={100}
      y={140}
      width={158}
      height={22}
      alpha={0.3}
    >
      <div style={{ height: 300 }}></div>
    </Watermark>
  );
}
