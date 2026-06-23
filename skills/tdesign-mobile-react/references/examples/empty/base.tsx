/**
 * TDesign TDesign Mobile React 示例：empty - base
 * 覆盖组件：Empty
 * 来源：组件库源码 src/empty/_example/base.tsx
 */

import React from 'react';
import { Empty } from 'tdesign-mobile-react';
import { InfoCircleFilledIcon } from 'tdesign-icons-react';

export default function Base() {
  return <Empty icon={<InfoCircleFilledIcon />} description="描述文字" />;
}
