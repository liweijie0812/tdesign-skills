/**
 * TDesign TDesign Mobile React 示例：cell - group
 * 覆盖组件：Cell
 * 来源：组件库源码 src/cell/_example/group.tsx
 */

import React from 'react';
import { CellGroup, Cell } from 'tdesign-mobile-react';
import { AppIcon, ServiceIcon, InternetIcon } from 'tdesign-icons-react';

export default function Group() {
  return (
    <CellGroup theme="card">
      <Cell leftIcon={<AppIcon />} title="单行标题" arrow />
      <Cell leftIcon={<ServiceIcon />} title="单行标题" arrow />
      <Cell leftIcon={<InternetIcon />} title="单行标题" arrow />
    </CellGroup>
  );
}
