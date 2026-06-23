/**
 * TDesign TDesign Mobile React 示例：fab - base
 * 覆盖组件：Fab
 * 来源：组件库源码 src/fab/_example/base.tsx
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
      <Fab icon={<AddIcon size={24} />} onClick={onClick} />
    </>
  );
}
