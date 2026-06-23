/**
 * TDesign TDesign Mobile React 示例：qrcode - icon
 * 覆盖组件：Qrcode
 * 来源：组件库源码 src/qrcode/_example/icon.tsx
 */

import React from 'react';
import { QRCode } from 'tdesign-mobile-react';

const value = 'https://tdesign.tencent.com/';
const icon = 'https://tdesign.gtimg.com/site/tdesign-logo.png';

export default function QRCodeExample() {
  return (
    <>
      <QRCode value={value} icon={icon} />
    </>
  );
}
