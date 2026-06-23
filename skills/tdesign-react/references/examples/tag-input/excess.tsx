/**
 * TDesign TDesign React 示例：tag-input - excess
 * 覆盖组件：Tag-input
 * 来源：组件库源码 packages/components/tag-input/_example/excess.tsx
 */

import React, { useState } from 'react';
import { Space, TagInput } from 'tdesign-react';

import type { TagInputValue } from 'tdesign-react';

export default function TagInputExcessExample() {
  const [tags, setTags] = useState<TagInputValue>(['Vue', 'React']);
  return (
    <Space direction="vertical" style={{ width: '80%' }}>
      {/* <!-- 标签数量超出时，滚动显示 --> */}
      <TagInput
        value={tags}
        onChange={setTags}
        label="Scroll: "
        excessTagsDisplayType="scroll"
        placeholder="请输入"
        clearable
      />

      {/* <!-- 标签数量超出时，换行显示，默认情况 --> */}
      <TagInput
        value={tags}
        onChange={setTags}
        label="BreakLine: "
        placeholder="请输入"
        excessTagsDisplayType="break-line"
        clearable
      />
    </Space>
  );
}
