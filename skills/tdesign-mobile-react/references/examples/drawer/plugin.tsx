/**
 * TDesign TDesign Mobile React 示例：drawer - plugin
 * 覆盖组件：Drawer
 * 来源：组件库源码 src/drawer/_example/plugin.tsx
 */

import React from 'react';
import { Button, DrawerPlugin } from 'tdesign-mobile-react';
import './style/index.less';

export default function Base() {
  const baseSidebar = [
    {
      title: '菜单一',
    },
    {
      title: '菜单二',
    },
    {
      title: '菜单三',
    },
    {
      title: '菜单四',
    },
    {
      title: '菜单五',
    },
    {
      title: '菜单六',
    },
  ];

  const showDrawer = () => {
    const instance = DrawerPlugin({
      items: baseSidebar,
      onItemClick(index: number) {
        console.log(index);
        instance.destroy();
      },
    });
    instance.show();
  };

  return (
    <Button theme="primary" size="large" variant="outline" block onClick={showDrawer}>
      命令行调用
    </Button>
  );
}
