/**
 * TDesign TDesign Mobile React 示例：watermark - movingText
 * 覆盖组件：Watermark
 * 来源：组件库源码 src/watermark/_example/movingText.tsx
 */

import React from 'react';
import { Watermark } from 'tdesign-mobile-react';

export default function MovingTextWatermark() {
  return (
    <Watermark watermarkContent={{ text: '文字水印' }} movable>
      <div style={{ height: 300 }}></div>
    </Watermark>
  );
}
