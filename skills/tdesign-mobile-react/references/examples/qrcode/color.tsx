/**
 * TDesign TDesign Mobile React 示例：qrcode - color
 * 覆盖组件：Qrcode
 * 来源：组件库源码 src/qrcode/_example/color.tsx
 */

import React from 'react';
import { QRCode } from 'tdesign-mobile-react';

const value = 'https://tdesign.tencent.com/';

export default function QRCodeExample() {
  return (
    <div className="tdesign-demos-qrcode" style={{ display: 'flex', flexDirection: 'column' }}>
      <QRCode value={value} color="#0052D9" bgColor="#fff" />

      <p className="tdesign-mobile-demo-block__summary">二维码背景颜色</p>
      <QRCode value={value} color="#0052D9" bgColor="#D9E1FF" />
    </div>
  );
}
