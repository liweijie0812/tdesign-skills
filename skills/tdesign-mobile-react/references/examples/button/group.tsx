/**
 * TDesign TDesign Mobile React 示例：button - group
 * 覆盖组件：Button
 * 来源：组件库源码 src/button/_example/group.tsx
 */

import React from 'react';
import { Button } from 'tdesign-mobile-react';

export default function () {
  return (
    <div className="row section-group">
      <Button size="large" theme="light">
        填充按钮
      </Button>
      <Button size="large" theme="primary">
        填充按钮
      </Button>
    </div>
  );
}
