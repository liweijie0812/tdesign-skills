/**
 * TDesign TDesign React 示例：divider - vertical
 * 覆盖组件：Divider
 * 来源：组件库源码 packages/components/divider/_example/vertical.tsx
 */

import React from 'react';
import { Divider } from 'tdesign-react';

export default function BasicDivider() {
  return (
    <>
      <span>正直</span>
      <Divider layout="vertical"></Divider>
      <span>进取</span>
      <Divider layout="vertical"></Divider>
      <span>合作</span>
      <Divider layout="vertical"></Divider>
      <span>创新</span>
    </>
  );
}
