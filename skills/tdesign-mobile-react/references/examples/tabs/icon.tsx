/**
 * TDesign TDesign Mobile React 示例：tabs - icon
 * 覆盖组件：Tabs
 * 来源：组件库源码 src/tabs/_example/icon.tsx
 */

import React from 'react';
import { Tabs, TabPanel } from 'tdesign-mobile-react';
import { AppIcon } from 'tdesign-icons-react';

export default () => (
  <div>
    <Tabs defaultValue={'first'}>
      <TabPanel value={'first'} label={'选项'} icon={<AppIcon />}></TabPanel>
      <TabPanel value={'second'} label={'选项'} icon={<AppIcon />}></TabPanel>
      <TabPanel
        value={'third'}
        label={
          <div className="label-content">
            <AppIcon size="large" />
            <span>选项</span>
          </div>
        }
      ></TabPanel>
    </Tabs>
  </div>
);
