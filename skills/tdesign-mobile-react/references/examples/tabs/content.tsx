/**
 * TDesign TDesign Mobile React 示例：tabs - content
 * 覆盖组件：Tabs
 * 来源：组件库源码 src/tabs/_example/content.tsx
 */

import React, { useState } from 'react';
import { Tabs, TabPanel } from 'tdesign-mobile-react';

export default () => {
  const list = [
    {
      value: '1',
      label: '选项',
      panel: '内容区1',
    },
    {
      value: '2',
      label: '选项',
      panel: '内容区2',
    },
    {
      value: '3',
      label: '上限六个文字',
      panel: '内容区3',
    },
  ];

  const [currentValue, setCurrentValue] = useState('1');
  const onChange = (value: string) => {
    setCurrentValue(value);
    console.log(value);
  };
  return (
    <div>
      <Tabs value={currentValue} list={list} onChange={onChange}>
        {list.map((item) => (
          <TabPanel key={item.value} value={item.value} label={item.label}>
            <p>{item.panel}</p>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};
