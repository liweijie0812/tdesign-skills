/**
 * TDesign TDesign Mobile React 示例：cell - single
 * 覆盖组件：Cell
 * 来源：组件库源码 src/cell/_example/single.tsx
 */

import React from 'react';
import { Cell, CellGroup, Badge, Switch } from 'tdesign-mobile-react';
import { AppIcon } from 'tdesign-icons-react';

export default function Single() {
  return (
    <div className="tdesign-grid-base">
      <CellGroup bordered>
        <Cell title="单行标题" arrow hover />
        <Cell title="单行标题" arrow hover required />
        <Cell title="单行标题" arrow hover note={<Badge count={16} />} />

        <Cell title="单行标题" hover note={<Switch default-value={true} />} />
        <Cell title="单行标题" arrow hover note="辅助信息" />

        <Cell title="单行标题" arrow hover leftIcon={<AppIcon />} />
      </CellGroup>
    </div>
  );
}
