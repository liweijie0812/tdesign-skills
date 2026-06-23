/**
 * TDesign TDesign React 示例：qrcode - base
 * 覆盖组件：Qrcode
 * 来源：组件库源码 packages/components/qrcode/_example/base.tsx
 */

import React from 'react';
import { Input, QRCode, Space } from 'tdesign-react';

export default function QRCodeExample() {
  const [text, setText] = React.useState('https://tdesign.tencent.com/');
  return (
    <Space direction="vertical" align="center">
      <QRCode value={text || '-'} />

      <Input placeholder="-" value={text} onChange={(v) => setText(v)} />
    </Space>
  );
}
