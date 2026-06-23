/**
 * TDesign TDesign React 示例：descriptions - bordered
 * 覆盖组件：Descriptions
 * 来源：组件库源码 packages/components/descriptions/_example/bordered.tsx
 */

import React from 'react';
import { Descriptions } from 'tdesign-react';

export default function Bordered() {
  const items = [
    {
      label: 'Name',
      content: 'TDesign',
    },
    {
      label: 'Telephone Number',
      content: '139****0609',
    },
    {
      label: 'Area',
      content: 'China Tencent Headquarters',
    },
    {
      label: 'Address',
      content: 'Shenzhen Penguin Island D1 4A Mail Center',
    },
  ];
  return <Descriptions items={items} title="Shipping address" bordered />;
}
