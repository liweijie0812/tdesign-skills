/**
 * TDesign TDesign Mobile React 示例：image-viewer - base
 * 覆盖组件：Image-viewer
 * 来源：组件库源码 src/image-viewer/_example/base.tsx
 */

import React, { useState } from 'react';
import { ImageViewer, Button } from 'tdesign-mobile-react';

const images = [
  'https://tdesign.gtimg.com/mobile/demos/swiper1.png',
  'https://tdesign.gtimg.com/mobile/demos/swiper2.png',
];

export default function BaseDemo() {
  const [visible, setVisible] = useState(false);

  const onIndexChange = (...args) => {
    console.log('onIndexChange', args);
  };

  const handleClose = (...args) => {
    console.log('onClose', args);
    setVisible(false);
  };

  return (
    <div className="image-example">
      <Button block size="large" variant="outline" theme="primary" onClick={() => setVisible(true)}>
        基础图片预览
      </Button>

      <ImageViewer images={images} visible={visible} onClose={handleClose} onIndexChange={onIndexChange} />
    </div>
  );
}
