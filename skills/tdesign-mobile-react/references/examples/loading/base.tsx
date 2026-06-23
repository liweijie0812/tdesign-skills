/**
 * TDesign TDesign Mobile React 示例：loading - base
 * 覆盖组件：Loading
 * 来源：组件库源码 src/loading/_example/base.tsx
 */

import React from 'react';
import { Loading } from 'tdesign-mobile-react';

export default function BaseLoading() {
  return (
    <>
      <Loading />
      <Loading theme="spinner" />
      <Loading theme="dots" size="40px" />
    </>
  );
}
