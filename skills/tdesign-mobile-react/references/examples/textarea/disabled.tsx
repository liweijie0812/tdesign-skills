/**
 * TDesign TDesign Mobile React 示例：textarea - disabled
 * 覆盖组件：Textarea
 * 来源：组件库源码 src/textarea/_example/disabled.tsx
 */

import React from 'react';
import { Textarea } from 'tdesign-mobile-react';

export default function Type() {
  return (
    <Textarea className="textarea-example" label="标签文字" placeholder="请输入文字" value="不可编辑文字" disabled />
  );
}
