/**
 * TDesign TDesign Mobile React 示例：tabs - badge
 * 覆盖组件：Tabs
 * 来源：组件库源码 src/tabs/_example/badge.tsx
 */

import React from 'react';
import { Tabs, TabPanel } from 'tdesign-mobile-react';

export default () => (
  <div>
    <Tabs defaultValue={'first'}>
      <TabPanel value={'first'} badgeProps={{ dot: true, offset: [0, 1] }} label="选项"></TabPanel>
      <TabPanel value={'second'} badgeProps={{ count: 8, offset: [0, 1] }} label="选项"></TabPanel>
      <TabPanel value={'third'} label="选项"></TabPanel>
    </Tabs>
  </div>
);
