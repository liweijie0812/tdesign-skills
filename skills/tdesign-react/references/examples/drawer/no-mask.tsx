/**
 * TDesign TDesign React 示例：drawer - no-mask
 * 覆盖组件：Drawer
 * 来源：组件库源码 packages/components/drawer/_example/no-mask.tsx
 */

import React, { useState } from 'react';
import { Button, Drawer } from 'tdesign-react';

export default function () {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button theme="primary" onClick={handleClick}>
        打开抽屉
      </Button>
      <Drawer header="抽屉标题" visible={visible} onClose={handleClose} showOverlay={false}>
        <p>抽屉的内容</p>
      </Drawer>
    </>
  );
}
