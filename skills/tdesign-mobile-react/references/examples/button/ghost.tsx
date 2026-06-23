/**
 * TDesign TDesign Mobile React 示例：button - ghost
 * 覆盖组件：Button
 * 来源：组件库源码 src/button/_example/ghost.tsx
 */

import React from 'react';
import { Button } from 'tdesign-mobile-react';

export default function () {
  return (
    <div className="row section-ghost">
      <Button size="large" ghost theme="primary">
        幽灵按钮
      </Button>
      <Button size="large" ghost theme="danger">
        幽灵按钮
      </Button>
      <Button size="large" ghost>
        幽灵按钮
      </Button>
    </div>
  );
}
