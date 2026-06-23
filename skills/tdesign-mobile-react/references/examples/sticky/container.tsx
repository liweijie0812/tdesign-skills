/**
 * TDesign TDesign Mobile React 示例：sticky - container
 * 覆盖组件：Sticky
 * 来源：组件库源码 src/sticky/_example/container.tsx
 */

import React from 'react';
import { Sticky, Button } from 'tdesign-mobile-react';
import './style/index.less';

export default function Base() {
  return (
    <div className="tdesign-demo-block-3" id="container">
      <Sticky container="#container">
        <Button className="custom-button custom-common-button">指定容器</Button>
      </Sticky>
    </div>
  );
}
