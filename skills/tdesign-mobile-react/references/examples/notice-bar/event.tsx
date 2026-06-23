/**
 * TDesign TDesign Mobile React 示例：notice-bar - event
 * 覆盖组件：Notice-bar
 * 来源：组件库源码 src/notice-bar/_example/event.tsx
 */

import React from 'react';
import { NoticeBar, Toast } from 'tdesign-mobile-react';
import { ChevronRightIcon } from 'tdesign-icons-react';
import './style/index.less';

export default function Event() {
  const handleClick = (context: string) => {
    Toast({ message: `click:${context}` });
  };
  return (
    <NoticeBar
      visible
      className="notice-bar-demo-block"
      content="这是一条普通的消息通知"
      suffixIcon={<ChevronRightIcon />}
      onClick={handleClick}
    />
  );
}
