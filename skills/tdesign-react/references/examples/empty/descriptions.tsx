/**
 * TDesign TDesign React 示例：empty - descriptions
 * 覆盖组件：Empty
 * 来源：组件库源码 packages/components/empty/_example/descriptions.tsx
 */

import React from 'react';
import { Button, Empty } from 'tdesign-react';

export default function Operation() {
  function goToIndex() {
    console.log('go to index');
    location.href = '/';
  }
  return <Empty action={<Button onClick={goToIndex}>返回首页</Button>} description="description" />;
}
