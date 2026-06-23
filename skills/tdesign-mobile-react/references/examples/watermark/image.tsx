/**
 * TDesign TDesign Mobile React 示例：watermark - image
 * 覆盖组件：Watermark
 * 来源：组件库源码 src/watermark/_example/image.tsx
 */

import React from 'react';
import { Watermark } from 'tdesign-mobile-react';

export default function ImageWatermark() {
  return (
    <Watermark
      watermarkContent={{
        url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png',
      }}
      width={120}
      height={20}
      x={56}
      y={76}
    >
      <div style={{ height: 300 }}></div>
    </Watermark>
  );
}
