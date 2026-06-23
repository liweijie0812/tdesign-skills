/**
 * TDesign TDesign React 示例：popup - visible
 * 覆盖组件：Popup
 * 来源：组件库源码 packages/components/popup/_example/visible.tsx
 */

import React, { useState } from 'react';
import { Button, Popup } from 'tdesign-react';

export default function Controlled() {
  const [visible, setVisible] = useState(false);

  return (
    <Popup content="这是popup内容" trigger="context-menu" placement="right" visible={visible}>
      {/* 当visible=true，trigger节点无法获取元素位置，会导致popup定位异常 */}
      <Button onClick={() => setVisible(!visible)}>一直显示</Button>
    </Popup>
  );
}
