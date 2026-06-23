/**
 * TDesign TDesign React 示例：tag-input - theme
 * 覆盖组件：Tag-input
 * 来源：组件库源码 packages/components/tag-input/_example/theme.tsx
 */

import React, { useState } from 'react';
import { Space, TagInput } from 'tdesign-react';

import type { TagInputValue } from 'tdesign-react';

export default function TagInputThemeExample() {
  const [tags, setTags] = useState<TagInputValue>(['Vue', 'React', 'Miniprogram']);
  return (
    <Space direction="vertical" style={{ width: '80%' }}>
      <TagInput value={tags} onChange={setTags} tagProps={{ theme: 'primary' }} />
      <TagInput value={tags} onChange={setTags} tagProps={{ theme: 'success' }} />
      <TagInput value={tags} onChange={setTags} tagProps={{ theme: 'warning' }} />
      <TagInput value={tags} onChange={setTags} tagProps={{ theme: 'danger' }} />
    </Space>
  );
}
