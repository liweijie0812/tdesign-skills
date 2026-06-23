/**
 * TDesign TDesign Mobile React 示例：watermark - gray
 * 覆盖组件：Watermark
 * 来源：组件库源码 src/watermark/_example/gray.tsx
 */

import React from 'react';
import { Watermark } from 'tdesign-mobile-react';

export default function GrayscaleWatermark() {
  return (
    <Watermark
      watermarkContent={{
        url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png',
        isGrayscale: true,
      }}
      x={56}
      y={76}
      width={120}
      height={20}
      alpha={0.3}
    >
      <div style={{ height: 300 }}></div>
    </Watermark>
  );
}
