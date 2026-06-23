/**
 * TDesign TDesign Mobile React 示例：button - size
 * 覆盖组件：Button
 * 来源：组件库源码 src/button/_example/size.tsx
 */

import React from 'react';
import { Button } from 'tdesign-mobile-react';

export default function () {
  return (
    <div className="row section-size">
      <Button size="large" theme="primary">
        按钮48
      </Button>
      <Button theme="primary">按钮40</Button>
      <Button size="small" theme="primary">
        按钮32
      </Button>
      <Button size="extra-small" theme="primary">
        按钮28
      </Button>
    </div>
  );
}
