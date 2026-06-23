/**
 * TDesign TDesign React 示例：dropdown - custom
 * 覆盖组件：Dropdown
 * 来源：组件库源码 packages/components/dropdown/_example/custom.tsx
 */

import React from 'react';
import { Button, Dropdown, MessagePlugin } from 'tdesign-react';

import type { DropdownProps } from 'tdesign-react';

export default function BasicDropdown() {
  const getContent = () => <div>操作四</div>;
  const options = [
    {
      content: '操作一',
      value: 1,
    },
    {
      content: '操作二',
      value: 2,
    },
    {
      content: '操作三',
      value: 3,
    },
    {
      content: getContent(),
      value: 4,
    },
  ];
  const clickHandler: DropdownProps['onClick'] = (data) => {
    MessagePlugin.success(`选中【${data.value}】`);
  };
  return (
    <Dropdown
      options={options}
      onClick={clickHandler}
      trigger="click"
      popupProps={{
        overlayStyle: { fontWeight: 'normal' },
        overlayInnerStyle: { fontWeight: 'normal' },
        overlayClassName: 'dropdown-custom-overlay-class',
        overlayInnerClassName: 'dropdown-custom-overlay-inner-class',
      }}
    >
      <Button>点击我试试</Button>
    </Dropdown>
  );
}
