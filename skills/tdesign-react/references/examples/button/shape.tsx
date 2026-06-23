/**
 * TDesign TDesign React 示例：button - shape
 * 覆盖组件：Button
 * 来源：组件库源码 packages/components/button/_example/shape.tsx
 */

import React from 'react';
import { CalendarIcon } from 'tdesign-icons-react';
import { Button, Space } from 'tdesign-react';

export default function ButtonExample() {
  return (
    <Space direction="vertical">
      <Space>
        <Button shape="rectangle" variant="base">
          填充按钮
        </Button>
        <Button shape="square" variant="base">
          <CalendarIcon />
        </Button>
        <Button shape="round" variant="base">
          填充按钮
        </Button>
        <Button shape="circle" variant="base">
          <CalendarIcon />
        </Button>
      </Space>
      <Space>
        <Button shape="rectangle" variant="outline">
          描边按钮
        </Button>
        <Button shape="square" variant="outline">
          <CalendarIcon />
        </Button>
        <Button shape="round" variant="outline">
          描边按钮
        </Button>
        <Button shape="circle" variant="outline">
          <CalendarIcon />
        </Button>
      </Space>
      <Space>
        <Button shape="rectangle" variant="dashed">
          虚框按钮
        </Button>
        <Button shape="square" variant="dashed">
          <CalendarIcon />
        </Button>
        <Button shape="round" variant="dashed">
          虚框按钮
        </Button>
        <Button shape="circle" variant="dashed">
          <CalendarIcon />
        </Button>
      </Space>
      <Space>
        <Button shape="rectangle" variant="text">
          文字按钮
        </Button>
        <Button shape="square" variant="text">
          <CalendarIcon />
        </Button>
        <Button shape="round" variant="text">
          文字按钮
        </Button>
        <Button shape="circle" variant="text">
          <CalendarIcon />
        </Button>
      </Space>
    </Space>
  );
}
