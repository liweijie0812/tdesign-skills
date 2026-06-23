/**
 * TDesign TDesign React 示例：space - align
 * 覆盖组件：Space
 * 来源：组件库源码 packages/components/space/_example/align.tsx
 */

import React from 'react';
import { Button, Space } from 'tdesign-react';

const BaseSpace = () => (
  <Space breakLine>
    <Space align="start" style={{ padding: 12, border: '1px dashed var(--td-component-stroke)' }}>
      <div>start</div>
      <Button>Button</Button>
      <div style={{ background: 'var(--td-bg-color-component)', height: 60, width: 60 }}></div>
    </Space>
    <Space align="center" style={{ padding: 12, border: '1px dashed var(--td-component-stroke)' }}>
      <div>center</div>
      <Button>Button</Button>
      <div style={{ background: 'var(--td-bg-color-component)', height: 60, width: 60 }}></div>
    </Space>
    <Space align="end" style={{ padding: 12, border: '1px dashed var(--td-component-stroke)' }}>
      <div>end</div>
      <Button>Button</Button>
      <div style={{ background: 'var(--td-bg-color-component)', height: 60, width: 60 }}></div>
    </Space>
    <Space align="baseline" style={{ padding: 12, border: '1px dashed var(--td-component-stroke)' }}>
      <div>baseline</div>
      <Button>Button</Button>
      <div style={{ background: 'var(--td-bg-color-component)', height: 60, width: 60 }}></div>
    </Space>
  </Space>
);

export default BaseSpace;
