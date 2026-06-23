/**
 * TDesign TDesign Mobile React 示例：toast - cover
 * 覆盖组件：Toast
 * 来源：组件库源码 src/toast/_example/cover.tsx
 */

import React from 'react';
import { Toast, Button } from 'tdesign-mobile-react';
import { PoweroffIcon } from 'tdesign-icons-react';

export default function () {
  const showMssk = () => {
    Toast({
      message: '禁止滑动和点击',
      direction: 'column',
      placement: 'bottom',
      duration: 5000,
      preventScrollThrough: true,
      showOverlay: true,
      icon: <PoweroffIcon />,
    });
  };
  return (
    <div className="toast-demo">
      <Button block theme="primary" variant="outline" size="large" onClick={showMssk}>
        禁止滑动和点击
      </Button>
    </div>
  );
}
