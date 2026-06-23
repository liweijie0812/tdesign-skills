/**
 * TDesign TDesign Mobile React 示例：collapse - base
 * 覆盖组件：Collapse
 * 来源：组件库源码 src/collapse/_example/base.tsx
 */

import React, { useState } from 'react';
import { Collapse, CollapsePanel } from 'tdesign-mobile-react';

export default function () {
  const [values, setValues] = useState([0]);

  const handleChange = (value: number[]) => {
    setValues(value);
  };

  return (
    <Collapse value={values} onChange={handleChange}>
      <CollapsePanel value={0} header="折叠面板标题">
        <div className="content">
          此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容此处可自定义内容
        </div>
      </CollapsePanel>
    </Collapse>
  );
}
