/**
 * TDesign TDesign Mobile React 示例：fab - advance
 * 覆盖组件：Fab
 * 来源：组件库源码 src/fab/_example/advance.tsx
 */

import React from 'react';
import { AddIcon } from 'tdesign-icons-react';
import { Fab } from 'tdesign-mobile-react';

export default function () {
  const onClick = (e) => {
    console.log('click Fab', e);
  };
  return (
    <>
      <Fab icon={<AddIcon size={24} />} text="按钮文字" style={{ right: '16px', bottom: '32px' }} onClick={onClick} />
    </>
  );
}
