/**
 * TDesign TDesign React 示例：list - multiline
 * 覆盖组件：List
 * 来源：组件库源码 packages/components/list/_example/multiline.tsx
 */

import React from 'react';
import { List } from 'tdesign-react';

const { ListItem, ListItemMeta } = List;

export default function BasicList() {
  const listData = [
    { id: 1, content: '列表内容列表内容列表内容' },
    { id: 2, content: '列表内容列表内容列表内容' },
    { id: 3, content: '列表内容列表内容列表内容' },
    { id: 4, content: '列表内容列表内容列表内容' },
  ];
  return (
    <List>
      {listData.map((item) => (
        <ListItem key={item.id}>
          <ListItemMeta title="列表主内容" description={item.content} />
        </ListItem>
      ))}
    </List>
  );
}
