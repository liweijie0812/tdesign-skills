/**
 * TDesign TDesign React 示例：pagination - mini
 * 覆盖组件：Pagination
 * 来源：组件库源码 packages/components/pagination/_example/mini.tsx
 */

import React from 'react';
import { Pagination } from 'tdesign-react';

export default function PaginationExample() {
  return <Pagination size="small" total={100} defaultPageSize={5} />;
}
