/**
 * TDesign TDesign Mobile React 示例：sticky - offset
 * 覆盖组件：Sticky
 * 来源：组件库源码 src/sticky/_example/offset.tsx
 */

import React from 'react';
import { Sticky, Button } from 'tdesign-mobile-react';
import './style/index.less';

export default function Base() {
  return (
    <div className="tdesign-demo-block-2">
      <Sticky offsetTop={50}>
        <Button className="custom-common-button" theme="danger">
          吸顶距离
        </Button>
      </Sticky>
    </div>
  );
}
