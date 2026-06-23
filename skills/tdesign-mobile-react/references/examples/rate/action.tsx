/**
 * TDesign TDesign Mobile React 示例：rate - action
 * 覆盖组件：Rate
 * 来源：组件库源码 src/rate/_example/action.tsx
 */

import React from 'react';
import { Cell, Rate } from 'tdesign-mobile-react';

export default function Action(props: { allowHalf: boolean }) {
  const { allowHalf } = props;
  return (
    <Cell title="点击或滑动" style={{ overflow: 'initial' }}>
      <Rate allowHalf={allowHalf} />
    </Cell>
  );
}
