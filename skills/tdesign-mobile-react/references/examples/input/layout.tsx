/**
 * TDesign TDesign Mobile React 示例：input - layout
 * 覆盖组件：Input
 * 来源：组件库源码 src/input/_example/layout.tsx
 */

import React from 'react';
import { Input } from 'tdesign-mobile-react';
import { ErrorCircleFilledIcon } from 'tdesign-icons-react';

export default function Layout() {
  return <Input label="标签文字" layout="vertical" placeholder="请输入文字" suffixIcon={<ErrorCircleFilledIcon />} />;
}
