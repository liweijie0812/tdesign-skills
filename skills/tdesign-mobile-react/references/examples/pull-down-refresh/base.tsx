/**
 * TDesign TDesign Mobile React 示例：pull-down-refresh - base
 * 覆盖组件：Pull-down-refresh
 * 来源：组件库源码 src/pull-down-refresh/_example/base.tsx
 */

import React from 'react';
import { PullDownRefresh } from 'tdesign-mobile-react';

export default function BaseDemo({ children }) {
  return (
    <div className="tdesign-mobile-wrapper">
      <PullDownRefresh
        loadingBarHeight={66}
        loadingProps={{}}
        loadingTexts={['下拉刷新', '松开刷新', '正在刷新', '刷新完成']}
        onChange={(value) => {
          console.log('[onChange]', value);
        }}
        onRefresh={() =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(1);
            }, 2000);
          })
        }
      >
        {children}
      </PullDownRefresh>
    </div>
  );
}
