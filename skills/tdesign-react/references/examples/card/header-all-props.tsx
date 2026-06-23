/**
 * TDesign TDesign React 示例：card - header-all-props
 * 覆盖组件：Card
 * 来源：组件库源码 packages/components/card/_example/header-all-props.tsx
 */

import React from 'react';
import { Card } from 'tdesign-react';

export default function HeaderAllPropsCard() {
  return (
    <Card
      title="标题"
      subtitle="副标题"
      description="描述"
      actions="操作"
      bordered
      hoverShadow
      style={{ width: '400px' }}
    >
      卡片内容，以描述性为主，可以是文字、图片或图文组合的形式。按业务需求进行自定义组合。
    </Card>
  );
}
