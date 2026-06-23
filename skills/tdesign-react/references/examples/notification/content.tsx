/**
 * TDesign TDesign React 示例：notification - content
 * 覆盖组件：Notification
 * 来源：组件库源码 packages/components/notification/_example/content.tsx
 */

import React from 'react';
import { Notification, Space } from 'tdesign-react';

export default function NotificationExample() {
  return (
    <Space direction="vertical">
      <Notification title="自定义内容（字符串）" content="这是一条消息通知" />
      <Notification title="自定义内容" content={<div>这是一条消息通知</div>} />
    </Space>
  );
}
