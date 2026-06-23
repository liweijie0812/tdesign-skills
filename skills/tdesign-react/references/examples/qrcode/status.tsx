/**
 * TDesign TDesign React 示例：qrcode - status
 * 覆盖组件：Qrcode
 * 来源：组件库源码 packages/components/qrcode/_example/status.tsx
 */

import React from 'react';
import { QRCode, Space } from 'tdesign-react';

const value = 'https://tdesign.tencent.com/';
export default function QRCodeExample() {
  return (
    <Space>
      <QRCode value={value} status="loading" />
      <QRCode value={value} status="expired" onRefresh={() => console.log('refresh')} />
      <QRCode value={value} status="scanned" />
    </Space>
  );
}
