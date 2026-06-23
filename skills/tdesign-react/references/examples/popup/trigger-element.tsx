/**
 * TDesign TDesign React 示例：popup - trigger-element
 * 覆盖组件：Popup
 * 来源：组件库源码 packages/components/popup/_example/trigger-element.tsx
 */

import React from 'react';
import { Button, Popup, Space } from 'tdesign-react';

export default function TriggerElement() {
  return (
    <Space>
      <Popup trigger="hover" showArrow content="这是一个弹出框">
        <Button variant="outline">默认子节点元素触发</Button>
      </Popup>
      <Popup triggerElement={<Button>使用 triggerElement 元素触发</Button>} showArrow content="这是一个弹出框"></Popup>
      <Button id="trigger-element" variant="outline">
        提供字符串选择器选择触发元素
      </Button>
      <Popup content="我的触发元素通过 triggerElement 字符串选择已有元素" triggerElement="#trigger-element" />
    </Space>
  );
}
