/**
 * TDesign TDesign React 示例：loading - text
 * 覆盖组件：Loading
 * 来源：组件库源码 packages/components/loading/_example/text.tsx
 */

import React from 'react';
import { Loading } from 'tdesign-react';

export default function TextExample() {
  return <Loading loading={true} text="静态文字加载中..." indicator={false}></Loading>;
}
