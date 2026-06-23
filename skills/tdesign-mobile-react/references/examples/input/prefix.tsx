/**
 * TDesign TDesign Mobile React 示例：input - prefix
 * 覆盖组件：Input
 * 来源：组件库源码 src/input/_example/prefix.tsx
 */

import React from 'react';
import { Input } from 'tdesign-mobile-react';
import { AppIcon } from 'tdesign-icons-react';

export default function Prefix() {
  return (
    <>
      <Input label="标签文字" placeholder="请输入文字" prefixIcon={<AppIcon />} />
      <Input placeholder="请输入文字" prefixIcon={<AppIcon />} />
    </>
  );
}
