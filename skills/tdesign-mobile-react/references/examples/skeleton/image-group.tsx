/**
 * TDesign TDesign Mobile React 示例：skeleton - image-group
 * 覆盖组件：Skeleton
 * 来源：组件库源码 src/skeleton/_example/image-group.tsx
 */

import React from 'react';
import { Skeleton } from 'tdesign-mobile-react';
import './style/index.less';

const rowCols = [{ size: '163.5px', borderRadius: '12px' }, 1, { width: '61%' }];

export default function ImageGroupSkeleton() {
  return (
    <div className="skeleton-demo--image-group">
      <div className="image-group">
        <Skeleton rowCol={rowCols} loading={true} />
        <Skeleton rowCol={rowCols} loading={true} />
      </div>
    </div>
  );
}
