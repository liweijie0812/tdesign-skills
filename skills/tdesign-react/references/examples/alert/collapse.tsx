/**
 * TDesign TDesign React 示例：alert - collapse
 * 覆盖组件：Alert
 * 来源：组件库源码 packages/components/alert/_example/collapse.tsx
 */

import React from 'react';
import { Alert } from 'tdesign-react';

export default function AlertCollapsed() {
  const message = [
    '1.这是一条普通的消息提示描述，',
    '2.这是一条普通的消息提示描述，',
    '3.这是一条普通的消息提示描述，',
    '4.这是一条普通的消息提示描述，',
    '5.这是一条普通的消息提示描述，',
  ];
  return <Alert message={message} maxLine={2} closeBtn />;
}
