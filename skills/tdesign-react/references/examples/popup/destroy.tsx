/**
 * TDesign TDesign React 示例：popup - destroy
 * 覆盖组件：Popup
 * 来源：组件库源码 packages/components/popup/_example/destroy.tsx
 */

import React from 'react';
import { Button, Popup } from 'tdesign-react';

export default function Destroy() {
  return (
    <Popup trigger="hover" destroyOnClose showArrow content="这是一个弹出框">
      <Button>Hover me</Button>
    </Popup>
  );
}
