/**
 * TDesign TDesign React 示例：loading - size
 * 覆盖组件：Loading
 * 来源：组件库源码 packages/components/loading/_example/size.tsx
 */

import React from 'react';
import { Loading, Space } from 'tdesign-react';

export default function LoadingSize() {
  return (
    <Space direction="vertical">
      <Loading text="加载中...（小）" loading size="small"></Loading>
      <Loading text="加载中...（中）" loading size="medium"></Loading>
      <Loading text="加载中...（大）" loading size="large"></Loading>
    </Space>
  );
}
