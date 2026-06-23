/**
 * TDesign TDesign Mobile React 示例：notice-bar - suffixIcon
 * 覆盖组件：Notice-bar
 * 来源：组件库源码 src/notice-bar/_example/suffixIcon.tsx
 */

import React from 'react';
import { NoticeBar } from 'tdesign-mobile-react';
import { CloseIcon } from 'tdesign-icons-react';

export default function SuffixIcon() {
  return <NoticeBar visible content="这是一条普通的通知信息" suffixIcon={<CloseIcon />} />;
}
