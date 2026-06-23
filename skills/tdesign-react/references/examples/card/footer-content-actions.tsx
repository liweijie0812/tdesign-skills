/**
 * TDesign TDesign React 示例：card - footer-content-actions
 * 覆盖组件：Card
 * 来源：组件库源码 packages/components/card/_example/footer-content-actions.tsx
 */

import React from 'react';
import { Icon } from 'tdesign-icons-react';
import { Button, Card, Comment, Dropdown, MessagePlugin } from 'tdesign-react';

import type { TdDropdownProps } from 'tdesign-react';

const options = [
  {
    content: '操作一',
    value: 1,
  },
  {
    content: '操作二',
    value: 2,
  },
];

const clickHandler: TdDropdownProps['onClick'] = (data) => {
  MessagePlugin.success(`选中【${data.value}】`);
};

export default function FooterContentActionsCard() {
  return (
    <Card
      actions={
        <Dropdown options={options} onClick={clickHandler} minColumnWidth="112">
          <Button variant="text" shape="square">
            <Icon name="more" />
          </Button>
        </Dropdown>
      }
      bordered
      theme="poster2"
      cover="https://tdesign.gtimg.com/site/source/card-demo.png"
      style={{ width: '400px' }}
      footer={
        <Comment author="标题" content="卡片内容" avatar="https://tdesign.gtimg.com/site/avatar-boy.jpg"></Comment>
      }
    ></Card>
  );
}
