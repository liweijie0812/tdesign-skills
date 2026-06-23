/**
 * TDesign TDesign React 示例：image-viewer - svg
 * 覆盖组件：Image-viewer
 * 来源：组件库源码 packages/components/image-viewer/_example/svg.tsx
 */

import React from 'react';
import { ImageViewer } from 'tdesign-react';

const img = [
  {
    mainImage: 'https://tdesign.gtimg.com/demo/tdesign-logo.svg',
    isSvg: true,
  },
  {
    mainImage: 'https://tdesign.gtimg.com/demo/demo-image-1.png',
  },
];

const Svg = () => (
  <div
    style={{
      width: 160,
      height: 160,
      border: '4px solid var(--td-bg-color-secondarycontainer)',
      borderRadius: 'var(--td-radius-medium)',
    }}
  >
    <ImageViewer images={img} zIndex={10000} />
  </div>
);

export default Svg;
