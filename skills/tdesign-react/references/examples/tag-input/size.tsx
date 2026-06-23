/**
 * TDesign TDesign React 示例：tag-input - size
 * 覆盖组件：Tag-input
 * 来源：组件库源码 packages/components/tag-input/_example/size.tsx
 */

import React, { useState } from 'react';
import { Space, TagInput } from 'tdesign-react';

import type { TagInputValue } from 'tdesign-react';

export default function TagInputSize() {
  const [tags1, setTags1] = useState<TagInputValue>(['Vue', 'React']);
  const [tags2, setTags2] = useState<TagInputValue>(['Vue', 'React']);
  const [tags3, setTags3] = useState<TagInputValue>(['Vue', 'React']);
  return (
    <Space direction="vertical" style={{ width: '80%' }}>
      <TagInput value={tags1} onChange={setTags1} size="small" clearable />

      <TagInput value={tags2} onChange={setTags2} clearable />

      <TagInput value={tags3} onChange={setTags3} size="large" clearable />
    </Space>
  );
}
