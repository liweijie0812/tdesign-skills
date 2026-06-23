/**
 * TDesign TDesign Mobile React 示例：notice-bar - customization
 * 覆盖组件：Notice-bar
 * 来源：组件库源码 src/notice-bar/_example/customization.tsx
 */

import React from 'react';
import { Link, NoticeBar } from 'tdesign-mobile-react';
import { CloseIcon } from 'tdesign-icons-react';
import './style/index.less';

export default function Customization() {
  return (
    <NoticeBar
      visible
      content="提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述提示文字描述"
      operation={
        <Link className="custom-link" theme="primary">
          详情
        </Link>
      }
      suffixIcon={<CloseIcon />}
    />
  );
}
