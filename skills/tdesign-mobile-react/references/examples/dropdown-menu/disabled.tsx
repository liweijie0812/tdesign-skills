/**
 * TDesign TDesign Mobile React 示例：dropdown-menu - disabled
 * 覆盖组件：Dropdown-menu
 * 来源：组件库源码 src/dropdown-menu/_example/disabled.tsx
 */

import React from 'react';
import { DropdownItem, DropdownMenu } from 'tdesign-mobile-react';

export default function DisabledDemo() {
  return (
    <DropdownMenu>
      <DropdownItem disabled={true} label="禁用菜单" />
      <DropdownItem disabled={true} label="禁用菜单" />
    </DropdownMenu>
  );
}
