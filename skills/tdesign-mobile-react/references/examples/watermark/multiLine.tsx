/**
 * TDesign TDesign Mobile React 示例：watermark - multiLine
 * 覆盖组件：Watermark
 * 来源：组件库源码 src/watermark/_example/multiLine.tsx
 */

import React from 'react';
import { Watermark } from 'tdesign-mobile-react';

export default function MultilineWatermark() {
  return (
    <Watermark
      watermarkContent={[
        { text: '水印文本', fontColor: 'black' },
        { url: 'https://tdesign.gtimg.com/starter/brand-logo-light.png' },
      ]}
      lineSpace={24}
      x={56}
      y={56}
      width={120}
      height={20}
      alpha={0.3}
    >
      <div style={{ height: 300 }}></div>
    </Watermark>
  );
}
