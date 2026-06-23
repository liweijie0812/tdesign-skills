/**
 * TDesign TDesign Mobile React 示例：result - custom
 * 覆盖组件：Result
 * 来源：组件库源码 src/result/_example/custom.tsx
 */

import React from 'react';
import { Image, Result } from 'tdesign-mobile-react';
import './style/index.less';

export default function CustomResult() {
  return (
    <Result
      image={<Image src="https://tdesign.gtimg.com/mobile/demos/result1.png" className="extra-class-image" />}
      title="自定义结果"
      description="描述文字"
    />
  );
}
