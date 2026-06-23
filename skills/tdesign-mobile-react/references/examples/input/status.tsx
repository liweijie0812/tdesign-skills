/**
 * TDesign TDesign Mobile React 示例：input - status
 * 覆盖组件：Input
 * 来源：组件库源码 src/input/_example/status.tsx
 */

import React from 'react';
import { Input } from 'tdesign-mobile-react';

export default function Status() {
  const text1 = '已输入文字';
  const text2 = '不可编辑文字';
  return (
    <>
      <Input value={text1} label="标签文字" placeholder="请输入文字" status="error" tips="辅助说明" />
      <Input value={text2} label="不可编辑" disabled />
    </>
  );
}
