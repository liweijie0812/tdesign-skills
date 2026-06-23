/**
 * TDesign TDesign React 示例：drawer - size
 * 覆盖组件：Drawer
 * 来源：组件库源码 packages/components/drawer/_example/size.tsx
 */

import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'tdesign-react';

export default function () {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState('small');

  const handleClick = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Space>
      <Radio.Group value={size} onChange={(value: string) => setSize(value)}>
        <Radio.Button value="small">small(300px)</Radio.Button>
        <Radio.Button value="medium">medium(500px)</Radio.Button>
        <Radio.Button value="large">large(760px)</Radio.Button>
        <Radio.Button value={200}>200</Radio.Button>
        <Radio.Button value="400px">400px</Radio.Button>
        <Radio.Button value="50%">50%</Radio.Button>
      </Radio.Group>
      <div>
        <Button theme="primary" onClick={handleClick}>
          打开抽屉
        </Button>
      </div>
      <Drawer size={size} header="Drawer" placement="right" visible={visible} onClose={handleClose}>
        <p>抽屉的内容</p>
      </Drawer>
    </Space>
  );
}
