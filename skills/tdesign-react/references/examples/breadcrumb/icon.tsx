/**
 * TDesign TDesign React 示例：breadcrumb - icon
 * 覆盖组件：Breadcrumb
 * 来源：组件库源码 packages/components/breadcrumb/_example/icon.tsx
 */

import React from 'react';
import { BookmarkIcon } from 'tdesign-icons-react';
import { Breadcrumb } from 'tdesign-react';

const { BreadcrumbItem } = Breadcrumb;

export default function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem icon={<BookmarkIcon />}>页面1</BreadcrumbItem>
      <BreadcrumbItem icon={<BookmarkIcon />}>页面2</BreadcrumbItem>
      <BreadcrumbItem icon={<BookmarkIcon />}>页面3</BreadcrumbItem>
    </Breadcrumb>
  );
}
