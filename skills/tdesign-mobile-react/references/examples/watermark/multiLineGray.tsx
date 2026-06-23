/**
 * TDesign TDesign Mobile React 示例：watermark - multiLineGray
 * 覆盖组件：Watermark
 * 来源：组件库源码 src/watermark/_example/multiLineGray.tsx
 */

import React from 'react';
import { Watermark } from 'tdesign-mobile-react';

export default function MultilineWatermark() {
  return (
    <Watermark
      watermarkContent={[
        { text: '水印文本', fontColor: 'black' },
        { url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png', isGrayscale: true },
      ]}
      lineSpace={24}
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
