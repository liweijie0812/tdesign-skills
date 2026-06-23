/**
 * TDesign TDesign Mobile React 示例：rate - count
 * 覆盖组件：Rate
 * 来源：组件库源码 src/rate/_example/count.tsx
 */

import React, { useState } from 'react';
import { Cell, Rate } from 'tdesign-mobile-react';

export default function Count() {
  const [value, setValue] = useState(2);

  return (
    <Cell title="自定义评分数量" style={{ overflow: 'initial' }}>
      <Rate
        count={3}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </Cell>
  );
}
