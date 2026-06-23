/**
 * TDesign TDesign Mobile React 示例：qrcode - borderless
 * 覆盖组件：Qrcode
 * 来源：组件库源码 src/qrcode/_example/borderless.tsx
 */

import React from 'react';
import { QRCode } from 'tdesign-mobile-react';

const value = 'https://tdesign.tencent.com/';
export default function QRCodeExample() {
  return (
    <>
      <QRCode value={value} borderless />
    </>
  );
}
