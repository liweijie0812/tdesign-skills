/**
 * TDesign TDesign React 示例：message - close-all
 * 覆盖组件：Message
 * 来源：组件库源码 packages/components/message/_example/close-all.tsx
 */

import React from 'react';
import { Button, MessagePlugin, Space } from 'tdesign-react';

export default function () {
  return (
    <Space>
      <Button
        onClick={() => {
          MessagePlugin.info('这是第一条消息');
          MessagePlugin.warning('这是第二条消息');
          MessagePlugin.error('这是第三条消息');
        }}
      >
        点击打开多个消息
      </Button>

      <Button
        onClick={() => {
          MessagePlugin.closeAll();
        }}
      >
        点击关闭所有消息
      </Button>
    </Space>
  );
}
