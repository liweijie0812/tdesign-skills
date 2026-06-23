/**
 * TDesign TDesign Mobile React 示例：search - shape
 * 覆盖组件：Search
 * 来源：组件库源码 src/search/_example/shape.tsx
 */

import React, { useState } from 'react';
import { Search } from 'tdesign-mobile-react';

export default function Shape() {
  const [value, setValue] = useState<string>('');
  const onChange = (val: string) => {
    console.log('change: ', val);
    setValue(val);
  };
  return (
    <div className="search-example">
      <Search clearable value={value} shape="round" placeholder="请输入关键字" onChange={onChange} />
    </div>
  );
}
