/**
 * TDesign TDesign React 示例：breadcrumb - options
 * 覆盖组件：Breadcrumb
 * 来源：组件库源码 packages/components/breadcrumb/_example/options.tsx
 */

import React from 'react';
import { Breadcrumb } from 'tdesign-react';

export default function BreadcrumbExample() {
  const options = [{ content: '页面1' }, { content: '页面2' }, { content: '页面3', href: 'https://github.com/' }];
  return <Breadcrumb options={options} />;
}
