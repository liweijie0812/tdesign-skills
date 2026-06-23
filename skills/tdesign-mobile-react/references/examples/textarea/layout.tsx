/**
 * TDesign TDesign Mobile React 示例：textarea - layout
 * 覆盖组件：Textarea
 * 来源：组件库源码 src/textarea/_example/layout.tsx
 */

import React from 'react';
import { Textarea } from 'tdesign-mobile-react';

export default function Layout() {
  return (
    <Textarea
      style={{ height: '162px' }}
      label="标签文字"
      placeholder="预设长文本预设长文本"
      maxlength={500}
      indicator
      layout="vertical"
    />
  );
}
