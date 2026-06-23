/**
 * TDesign TDesign React 示例：image-viewer - button
 * 覆盖组件：Image-viewer
 * 来源：组件库源码 packages/components/image-viewer/_example/button.tsx
 */

import React from 'react';
import { Button, ImageViewer } from 'tdesign-react';

import type { ImageViewerProps } from 'tdesign-react';

const img = 'https://tdesign.gtimg.com/demo/demo-image-1.png';

export default function BasicImageViewer() {
  const trigger: ImageViewerProps['trigger'] = ({ open }) => <Button onClick={() => open()}>预览单张图片</Button>;
  return <ImageViewer trigger={trigger} images={[img]} zIndex={10000} />;
}
