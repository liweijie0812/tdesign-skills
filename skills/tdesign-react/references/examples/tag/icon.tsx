/**
 * TDesign TDesign React 示例：tag - icon
 * 覆盖组件：Tag
 * 来源：组件库源码 packages/components/tag/_example/icon.tsx
 */

import React from 'react';
import { DiscountIcon } from 'tdesign-icons-react';
import { Tag } from 'tdesign-react';

export default function ThemeTagExample() {
  return (
    <Tag icon={<DiscountIcon />} theme="default">
      默认标签
    </Tag>
  );
}
