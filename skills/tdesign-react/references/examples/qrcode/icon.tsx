/**
 * TDesign TDesign React 示例：qrcode - icon
 * 覆盖组件：Qrcode
 * 来源：组件库源码 packages/components/qrcode/_example/icon.tsx
 */

import React from 'react';
import { QRCode } from 'tdesign-react';

export default function QRCodeExample() {
  return (
    <QRCode
      icon="https://tdesign.gtimg.com/site/tdesign-logo.png"
      iconSize={30}
      value={'https://tdesign.tencent.com/'}
    />
  );
}
