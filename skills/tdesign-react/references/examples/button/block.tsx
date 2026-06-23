/**
 * TDesign TDesign React 示例：button - block
 * 覆盖组件：Button
 * 来源：组件库源码 packages/components/button/_example/block.tsx
 */

import React from 'react';
import { Button, Space } from 'tdesign-react';

export default function ButtonExample() {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button block variant="base">
        填充按钮
      </Button>
      <Button block variant="outline">
        描边按钮
      </Button>
      <Button block variant="dashed">
        虚框按钮
      </Button>
      <Button block variant="text">
        文字按钮
      </Button>
    </Space>
  );
}
