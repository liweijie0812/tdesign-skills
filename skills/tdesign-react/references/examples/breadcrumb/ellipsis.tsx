/**
 * TDesign TDesign React 示例：breadcrumb - ellipsis
 * 覆盖组件：Breadcrumb
 * 来源：组件库源码 packages/components/breadcrumb/_example/ellipsis.tsx
 */

import React from 'react';
import { Breadcrumb } from 'tdesign-react';

const { BreadcrumbItem } = Breadcrumb;

const options = [
  { content: '页面1' },
  { content: '页面2' },
  { content: '页面3' },
  { content: '页面4' },
  { content: '页面5' },
];

export default function BreadcrumbExample() {
  return (
    <>
      <Breadcrumb maxItems={3} itemsBeforeCollapse={2} itemsAfterCollapse={1}>
        {options.map((option) => (
          <BreadcrumbItem key={option.content} content={option.content} />
        ))}
      </Breadcrumb>

      <Breadcrumb maxItems={3} itemsBeforeCollapse={2} itemsAfterCollapse={1} options={options} />
    </>
  );
}
