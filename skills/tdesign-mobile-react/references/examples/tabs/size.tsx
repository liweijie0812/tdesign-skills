/**
 * TDesign TDesign Mobile React 示例：tabs - size
 * 覆盖组件：Tabs
 * 来源：组件库源码 src/tabs/_example/size.tsx
 */

import React from 'react';
import { Tabs, TabPanel } from 'tdesign-mobile-react';

export default () => {
  const mediumTabPanels = [
    {
      value: '1',
      label: '小尺寸',
    },
    {
      value: '2',
      label: '选项',
    },
    {
      value: '3',
      label: '选项',
    },
    {
      value: '4',
      label: '选项',
    },
  ];

  const largeTabPanels = [
    {
      value: '1',
      label: '大尺寸',
    },
    {
      value: '2',
      label: '选项',
    },
    {
      value: '3',
      label: '选项',
    },
    {
      value: '4',
      label: '选项',
    },
  ];

  return (
    <div className="demo-tab-bar">
      <Tabs defaultValue={'1'} size="medium">
        {mediumTabPanels.map((item, index) => (
          <TabPanel key={index} value={item.value} label={item.label}></TabPanel>
        ))}
      </Tabs>
      <Tabs defaultValue={'1'} size="large">
        {largeTabPanels.map((item, index) => (
          <TabPanel key={index} value={item.value} label={item.label}></TabPanel>
        ))}
      </Tabs>
    </div>
  );
};
