/**
 * TDesign TDesign React 示例：image - avif
 * 覆盖组件：Image
 * 来源：组件库源码 packages/components/image/_example/avif.tsx
 */

import React from 'react';
import { Image } from 'tdesign-react';

export default function AvifImage() {
  return (
    <Image
      src="https://tdesign.gtimg.com/img/tdesign-image.avif"
      srcset={{
        'image/avif': 'https://tdesign.gtimg.com/img/tdesign-image.avif',
        'image/webp': 'https://tdesign.gtimg.com/img/tdesign-image.webp',
      }}
      shape="square"
      style={{ maxWidth: '100%' }}
      fit="scale-down"
    />
  );
}
