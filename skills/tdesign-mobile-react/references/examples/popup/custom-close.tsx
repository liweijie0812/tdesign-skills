/**
 * TDesign TDesign Mobile React 示例：popup - custom-close
 * 覆盖组件：Popup
 * 来源：组件库源码 src/popup/_example/custom-close.tsx
 */

import React, { useState } from 'react';
import { CloseCircleIcon } from 'tdesign-icons-react';
import { Popup, Button } from 'tdesign-mobile-react';

export default function CustomClose() {
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  const onHide = () => setVisible(false);

  return (
    <>
      <Button variant="outline" block={true} theme="primary" size="large" onClick={() => setVisible(true)}>
        居中弹出层-带自定义关闭按钮
      </Button>

      <Popup
        visible={visible}
        onVisibleChange={handleVisibleChange}
        placement="center"
        style={{ width: '240px', height: '240px' }}
      >
        <CloseCircleIcon
          className="design-mobile-popup-demo__custom-close close-btn"
          size={32}
          color="#fff"
          onClick={onHide}
        />
      </Popup>
    </>
  );
}
