/**
 * TDesign TDesign React 示例：space - separator
 * 覆盖组件：Space
 * 来源：组件库源码 packages/components/space/_example/separator.tsx
 */

import React from 'react';
import { Button, Divider, Space } from 'tdesign-react';

const BaseSpace = () => (
  <Space align="center" separator={<Divider layout="vertical" />}>
    <Button variant="text">Text</Button>
    <Button variant="text">Text</Button>
    <Button variant="text">Text</Button>
  </Space>
);

export default BaseSpace;
