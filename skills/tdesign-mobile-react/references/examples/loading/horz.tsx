/**
 * TDesign TDesign Mobile React 示例：loading - horz
 * 覆盖组件：Loading
 * 来源：组件库源码 src/loading/_example/horz.tsx
 */

import React from 'react';
import { Loading } from 'tdesign-mobile-react';

export default function HorzLoading() {
  return (
    <>
      <Loading text="加载中..." />
      <Loading theme="spinner" text="加载中..." />
    </>
  );
}
