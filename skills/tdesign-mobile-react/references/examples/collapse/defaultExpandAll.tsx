/**
 * TDesign TDesign Mobile React 示例：collapse - defaultExpandAll
 * 覆盖组件：Collapse
 * 来源：组件库源码 src/collapse/_example/defaultExpandAll.tsx
 */

import React from 'react';
import { Collapse, CollapsePanel } from 'tdesign-mobile-react';

export default function () {
  return (
    <Collapse defaultExpandAll expandMutex={false}>
      <CollapsePanel value="0" header="面板1">
        内容1
      </CollapsePanel>
      <CollapsePanel value="1" header="面板2">
        内容2
      </CollapsePanel>
      <CollapsePanel value="2" header="面板2">
        内容2
      </CollapsePanel>
    </Collapse>
  );
}
