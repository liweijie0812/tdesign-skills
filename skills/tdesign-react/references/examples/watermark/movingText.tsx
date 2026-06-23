/**
 * TDesign TDesign React 示例：watermark - movingText
 * 覆盖组件：Watermark
 * 来源：组件库源码 packages/components/watermark/_example/movingText.tsx
 */

import React from 'react';
import { Watermark } from 'tdesign-react';

export default function MovingTextWatermark() {
  return (
    <Watermark watermarkContent={{ text: '©️版权所有' }} movable>
      <div style={{ height: 300 }}></div>
    </Watermark>
  );
}
