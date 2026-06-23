/**
 * TDesign TDesign Mobile React 示例：button - block
 * 覆盖组件：Button
 * 来源：组件库源码 src/button/_example/block.tsx
 */

import React from 'react';
import { Button } from 'tdesign-mobile-react';

export default function () {
  return (
    <div className="row">
      <Button size="large" theme="primary" block>
        填充按钮
      </Button>
    </div>
  );
}
