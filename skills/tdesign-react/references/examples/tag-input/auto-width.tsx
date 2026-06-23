/**
 * TDesign TDesign React 示例：tag-input - auto-width
 * 覆盖组件：Tag-input
 * 来源：组件库源码 packages/components/tag-input/_example/auto-width.tsx
 */

import React, { useState } from 'react';
import { TagInput } from 'tdesign-react';

const TagInputAutoWidth = () => {
  const [tags, setTags] = useState(['Vue', 'React']);

  const onChange = (val: string[]) => {
    setTags(val);
  };
  return <TagInput value={tags} onChange={onChange} autoWidth clearable />;
};

TagInputAutoWidth.displayName = 'TagInputAutoWidth';

export default TagInputAutoWidth;
