/**
 * TDesign TDesign React 示例：button - status
 * 覆盖组件：Button
 * 来源：组件库源码 packages/components/button/_example/status.tsx
 */

import React from 'react';
import { Button, Space } from 'tdesign-react';

export default function ButtonExample() {
  return (
    <Space>
      <Button disabled>填充按钮</Button>
      <Button loading>加载中</Button>
    </Space>
  );
}
