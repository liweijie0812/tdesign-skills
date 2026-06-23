/**
 * TDesign TDesign Mobile React 示例：search - action
 * 覆盖组件：Search
 * 来源：组件库源码 src/search/_example/action.tsx
 */

import React from 'react';
import { Search } from 'tdesign-mobile-react';

export default function Action() {
  const onChange = (val: string) => {
    console.log('change: ', val);
  };
  return (
    <div className="search-example">
      <Search placeholder="搜索预设文案" center focus action="取消" onChange={onChange} />
    </div>
  );
}
