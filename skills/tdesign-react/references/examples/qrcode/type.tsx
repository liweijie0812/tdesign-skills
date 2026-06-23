/**
 * TDesign TDesign React 示例：qrcode - type
 * 覆盖组件：Qrcode
 * 来源：组件库源码 packages/components/qrcode/_example/type.tsx
 */

import React from 'react';
import { QRCode, Space } from 'tdesign-react';

export default function QRCodeExample() {
  return (
    <Space>
      <QRCode type="canvas" value={'https://tdesign.tencent.com/'} />
      <QRCode type="svg" value={'https://tdesign.tencent.com/'} />
    </Space>
  );
}
