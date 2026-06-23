/**
 * TDesign TDesign React 示例：breadcrumb - to
 * 覆盖组件：Breadcrumb
 * 来源：组件库源码 packages/components/breadcrumb/_example/to.tsx
 */

import React from 'react';
import { Breadcrumb } from 'tdesign-react';

const { BreadcrumbItem } = Breadcrumb;

export default function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <BreadcrumbItem to={{ path: '/' }}>首页</BreadcrumbItem>
      <BreadcrumbItem to={{ path: '/' }}>页面1</BreadcrumbItem>
    </Breadcrumb>
  );
}
