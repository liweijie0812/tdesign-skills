/**
 * TDesign TDesign Mobile React 示例：pull-down-refresh - top
 * 覆盖组件：Pull-down-refresh
 * 来源：组件库源码 src/pull-down-refresh/_example/top.tsx
 */

import React, { useState } from 'react';
import { PullDownRefresh, Skeleton, type SkeletonRowCol } from 'tdesign-mobile-react';
import './style/index.less';

export default function Demo() {
  const [value, setValue] = useState(false);

  const onChange = (val) => {
    console.log('val: ', val);
  };

  const rowCols: SkeletonRowCol = [
    {
      height: '171px',
    },
    [
      {
        width: '50%',
        type: 'circle',
      },
      {
        width: '50%',
        type: 'circle',
      },
    ],
    [
      {
        width: '30%',
        type: 'circle',
      },
      {
        width: '30%',
        type: 'circle',
      },
    ],
  ];

  return (
    <div className="tdesign-mobile-wrapper">
      <PullDownRefresh
        loadingProps={{
          layout: 'vertical',
        }}
        value={value}
        onChange={onChange}
        loadingBarHeight={80}
        onRefresh={() => {
          setValue(true);
          const p = new Promise((resolve) => {
            setTimeout(() => {
              resolve(1);
            }, 1000);
          });
          p.then(() => {
            setValue(false);
          });
        }}
      >
        <div className="tdesign-mobile-block">拖拽该区域演示 中间下拉刷新</div>
        <div style={{ display: 'flex' }}>
          <div className="tdesign-mobile-item">
            <Skeleton theme="text" rowCol={rowCols} />
          </div>
          <div className="tdesign-mobile-item">
            <Skeleton theme="text" rowCol={rowCols} />
          </div>
        </div>
      </PullDownRefresh>
    </div>
  );
}
