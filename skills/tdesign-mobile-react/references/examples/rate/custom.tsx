/**
 * TDesign TDesign Mobile React 示例：rate - custom
 * 覆盖组件：Rate
 * 来源：组件库源码 src/rate/_example/custom.tsx
 */

import React, { useState } from 'react';
import { ThumbUpIcon } from 'tdesign-icons-react';
import { Cell, Rate } from 'tdesign-mobile-react';

export default function Custom() {
  const [value, setValue] = useState(3);

  return (
    <Cell title="自定义评分" style={{ overflow: 'initial' }}>
      <Rate
        icon={[<ThumbUpIcon key={1} />, <ThumbUpIcon key={2} />]}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
    </Cell>
  );
}
