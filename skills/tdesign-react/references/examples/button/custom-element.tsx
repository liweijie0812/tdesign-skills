/**
 * TDesign TDesign React 示例：button - custom-element
 * 覆盖组件：Button
 * 来源：组件库源码 packages/components/button/_example/custom-element.tsx
 */

import React from 'react';
import { Button, Space } from 'tdesign-react';

export default function ButtonExample() {
  return (
    <Space size={24}>
      <Button tag="div">div</Button>
      <Button tag="a">a</Button>
      <Button href="#">a:href</Button>
    </Space>
  );
}
