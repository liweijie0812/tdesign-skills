/**
 * TDesign TDesign React 示例：image - shape
 * 覆盖组件：Image
 * 来源：组件库源码 packages/components/image/_example/shape.tsx
 */

import React from 'react';
import { Image, Space } from 'tdesign-react';

export default function ShapeImage() {
  return (
    <Space>
      <Space direction="vertical" align="center">
        <Image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          shape="square"
          style={{ width: 160, height: 160 }}
          fit="cover"
        />
        square
      </Space>
      <Space direction="vertical" align="center">
        <Image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          style={{ width: 160, height: 160 }}
          fit="cover"
          shape="round"
        />
        round
      </Space>
      <Space direction="vertical" align="center">
        <Image
          src="https://tdesign.gtimg.com/demo/demo-image-1.png"
          style={{ width: 160, height: 160 }}
          shape="circle"
          fit="cover"
        />
        circle
      </Space>
    </Space>
  );
}
