/**
 * TDesign TDesign React 示例：watermark - base
 * 覆盖组件：Watermark
 * 来源：组件库源码 packages/components/watermark/_example/base.tsx
 */

import React from 'react';
import { Watermark } from 'tdesign-react';

export default function BaseWatermark() {
  return (
    <Watermark watermarkContent={{ text: '文字水印' }} y={120} x={80}>
      <div style={{ height: 300 }}></div>
    </Watermark>
  );
}
