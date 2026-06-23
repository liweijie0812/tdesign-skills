/**
 * TDesign TDesign React 示例：notification - icon
 * 覆盖组件：Notification
 * 来源：组件库源码 packages/components/notification/_example/icon.tsx
 */

import React from 'react';
import { Notification, Space } from 'tdesign-react';

export default function NotificationExample() {
  return (
    <Space direction="vertical">
      <Notification
        theme="info"
        title="普通通知"
        content="这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知"
      />
      <Notification
        theme="error"
        title="危险通知"
        content="这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知"
      />
      <Notification
        theme="warning"
        title="告警通知"
        content="这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知"
      />
      <Notification
        theme="success"
        title="成功通知"
        content="这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知"
      />
    </Space>
  );
}
