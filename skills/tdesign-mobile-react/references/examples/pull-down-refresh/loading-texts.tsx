/**
 * TDesign TDesign Mobile React 示例：pull-down-refresh - loading-texts
 * 覆盖组件：Pull-down-refresh
 * 来源：组件库源码 src/pull-down-refresh/_example/loading-texts.tsx
 */

import React, { useState } from 'react';
import { PullDownRefresh } from 'tdesign-mobile-react';

export default function Demo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <PullDownRefresh
        loadingBarHeight={70}
        maxBarHeight={100}
        loadingTexts={['下拉即可刷新...', '释放即可刷新...', '加载中...', '刷新成功']}
        onRefresh={() =>
          new Promise((resolve) => {
            setCount(count + 1);
            setTimeout(() => {
              resolve(1);
            }, 1000);
          })
        }
      >
        <div className="pull-down-refresh-content">已下拉{count}次</div>
      </PullDownRefresh>
    </div>
  );
}
