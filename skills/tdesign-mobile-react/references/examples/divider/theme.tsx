/**
 * TDesign TDesign Mobile React 示例：divider - theme
 * 覆盖组件：Divider
 * 来源：组件库源码 src/divider/_example/theme.tsx
 */

import React from 'react';
import { Divider } from 'tdesign-mobile-react';
import './style/index.less';

export default function Theme() {
  return (
    <div>
      <Divider dashed />
      <Divider dashed content="文字信息" align="left" />
      <Divider dashed content="文字信息" />
      <Divider dashed content="文字信息" align="right" />
    </div>
  );
}
