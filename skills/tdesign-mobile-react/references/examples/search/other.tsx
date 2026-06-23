/**
 * TDesign TDesign Mobile React 示例：search - other
 * 覆盖组件：Search
 * 来源：组件库源码 src/search/_example/other.tsx
 */

import React from 'react';
import { Search } from 'tdesign-mobile-react';

export default function Other() {
  const onChange = (val: string) => {
    console.log('change: ', val);
  };
  return (
    <div className="search-example">
      <Search placeholder="搜索预设文案" onChange={onChange} />
    </div>
  );
}
