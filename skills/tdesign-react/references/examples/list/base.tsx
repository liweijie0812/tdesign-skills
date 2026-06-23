/**
 * TDesign TDesign React 示例：list - base
 * 覆盖组件：List
 * 来源：组件库源码 packages/components/list/_example/base.tsx
 */

import React from 'react';
import { Link, List, Space } from 'tdesign-react';

const { ListItem } = List;

export default function BasicList() {
  return (
    <List>
      <ListItem
        action={
          <Space>
            <Link theme="primary" hover="color">
              操作1
            </Link>
            <Link theme="primary" hover="color">
              操作2
            </Link>
            <Link theme="primary" hover="color">
              操作3
            </Link>
          </Space>
        }
      >
        列表内容的描述性文字
      </ListItem>
      <ListItem
        action={
          <Space>
            <Link theme="primary" hover="color">
              操作1
            </Link>
            <Link theme="primary" hover="color">
              操作2
            </Link>
            <Link theme="primary" hover="color">
              操作3
            </Link>
          </Space>
        }
      >
        列表内容的描述性文字
      </ListItem>
    </List>
  );
}
