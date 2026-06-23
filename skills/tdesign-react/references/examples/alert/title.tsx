/**
 * TDesign TDesign React 示例：alert - title
 * 覆盖组件：Alert
 * 来源：组件库源码 packages/components/alert/_example/title.tsx
 */

import React from 'react';
import { Alert } from 'tdesign-react';

export default function AlertDescription() {
  const operation = <span>相关操作</span>;
  return (
    <Alert
      message="这是一条普通的消息提示描述，这是一条普通的消息提示描述"
      title="这是一条普通的消息提示"
      operation={operation}
      closeBtn
    />
  );
}
