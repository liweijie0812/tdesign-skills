/**
 * TDesign TDesign React 示例：tabs - theme
 * 覆盖组件：Tabs
 * 来源：组件库源码 packages/components/tabs/_example/theme.tsx
 */

import React from 'react';
import { Space, Tabs } from 'tdesign-react';

const { TabPanel } = Tabs;

export default function ThemeTabs() {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Tabs placement={'top'} size={'medium'} theme="normal" disabled={false}>
        <TabPanel value={'1'} label={'选项卡1'}>
          <div style={{ margin: 20 }}>选项卡1内容区</div>
        </TabPanel>
        <TabPanel value={'2'} label={'选项卡2'}>
          <div style={{ margin: 20 }}>选项卡2内容区</div>
        </TabPanel>
      </Tabs>

      <Tabs placement={'top'} size={'medium'} theme="card" disabled={false}>
        <TabPanel value={'1'} label={'选项卡1'}>
          <div style={{ margin: 20 }}>选项卡1内容区</div>
        </TabPanel>
        <TabPanel value={'2'} label={'选项卡2'}>
          <div style={{ margin: 20 }}>选项卡2内容区</div>
        </TabPanel>
      </Tabs>
    </Space>
  );
}
