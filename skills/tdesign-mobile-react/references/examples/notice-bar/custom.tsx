/**
 * TDesign TDesign Mobile React 示例：notice-bar - custom
 * 覆盖组件：Notice-bar
 * 来源：组件库源码 src/notice-bar/_example/custom.tsx
 */

import React from 'react';
import { NoticeBar } from 'tdesign-mobile-react';
import { ChevronRightIcon, SoundIcon } from 'tdesign-icons-react';
import './style/index.less';

export default function Custom() {
  return (
    <NoticeBar
      className="cover-class"
      visible
      content="提示文字描述提示文字描述提示文字描述"
      prefixIcon={<SoundIcon />}
      suffixIcon={<ChevronRightIcon />}
    />
  );
}
