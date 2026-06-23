/**
 * TDesign TDesign React 示例：image - lazy-list
 * 覆盖组件：Image
 * 来源：组件库源码 packages/components/image/_example/lazy-list.tsx
 */

import React, { useState } from 'react';
import { RefreshIcon } from 'tdesign-icons-react';
import { Button, Image, Space } from 'tdesign-react';

export default function LazyListImage() {
  const [loadCount, setLoadCount] = useState(0);
  const handleReload = () => {
    setLoadCount(loadCount + 1);
  };

  return (
    <Space direction="vertical" key={loadCount}>
      <Space breakLine style={{ height: 240, overflowY: 'scroll' }}>
        {Array.from({ length: 24 }).map((_, index) => (
          <Image
            key={index}
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            style={{ width: 230, height: 120 }}
            lazy
          />
        ))}
      </Space>
      <Button variant="outline" icon={<RefreshIcon />} onClick={handleReload}>
        重演 lazy load
      </Button>
    </Space>
  );
}
