/**
 * TDesign TDesign React 示例：descriptions - items
 * 覆盖组件：Descriptions
 * 来源：组件库源码 packages/components/descriptions/_example/items.tsx
 */

import React from 'react';
import { Descriptions } from 'tdesign-react';

export default function Items() {
  const items = [
    { label: 'Name', content: 'TDesign' },
    { label: <button>Telephone Number</button>, content: '139****0609' },
    { label: 'Area', content: <h3>China Tencent Headquarters</h3> },
    { label: <i>Address</i>, content: <mark> Shenzhen Penguin Island D1 4A Mail Center</mark> },
  ];
  return <Descriptions items={items} title="Shipping address" bordered />;
}
