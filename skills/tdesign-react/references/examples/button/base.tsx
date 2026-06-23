/**
 * TDesign TDesign React 示例：button - base
 * 覆盖组件：Button
 * 来源：组件库源码 packages/components/button/_example/base.tsx
 */

import React from 'react';
import { Button, Space } from 'tdesign-react';

export default function ButtonExample() {
  return (
    <Space>
      <Button theme="default" variant="base">
        填充按钮
      </Button>
      <Button theme="default" variant="outline">
        描边按钮
      </Button>
      <Button theme="default" variant="dashed">
        虚框按钮
      </Button>
      <Button theme="default" variant="text">
        文字按钮
      </Button>
    </Space>
  );
}
