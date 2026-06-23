/**
 * TDesign TDesign React 示例：qrcode - level
 * 覆盖组件：Qrcode
 * 来源：组件库源码 packages/components/qrcode/_example/level.tsx
 */

import React, { useState } from 'react';
import { QRCode, Radio, Space } from 'tdesign-react';

import type { QrCodeProps } from 'tdesign-react';

export default function QRCodeExample() {
  const [level, setLevel] = useState<QrCodeProps['level']>('L');
  const onChange = (value: QrCodeProps['level']) => {
    setLevel(value);
  };

  return (
    <Space direction="vertical">
      <Radio.Group value={level} variant="default-filled" onChange={onChange}>
        <Radio.Button value="L">L</Radio.Button>
        <Radio.Button value="M">M</Radio.Button>
        <Radio.Button value="Q">Q</Radio.Button>
        <Radio.Button value="H">H</Radio.Button>
      </Radio.Group>

      <QRCode style={{ marginBottom: 16 }} level={level} value={'https://tdesign.gtimg.com/site/tdesign-logo.png'} />
    </Space>
  );
}
