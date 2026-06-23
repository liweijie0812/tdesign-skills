/**
 * TDesign TDesign Mobile React 示例：loading - vert
 * 覆盖组件：Loading
 * 来源：组件库源码 src/loading/_example/vert.tsx
 */

import React from 'react';
import { Loading } from 'tdesign-mobile-react';

export default function VertLoading() {
  return (
    <>
      <Loading text="加载中..." layout="vertical" />
      <Loading theme="spinner" text="加载中..." layout="vertical" />
    </>
  );
}
