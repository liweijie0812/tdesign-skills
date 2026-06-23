/**
 * TDesign TDesign Mobile React 示例：upload - base
 * 覆盖组件：Upload
 * 来源：组件库源码 src/upload/_example/base.tsx
 */

import React from 'react';
import { Message, Upload } from 'tdesign-mobile-react';
import './style/index.less';

export default function BaseDemo() {
  const onValidate = (context: any) => {
    if (context.type === 'FILE_OVER_SIZE_LIMIT') {
      Message.warning({
        duration: 3000,
        content: '文件大小超出限制',
        icon: true,
      });
    }
  };
  return (
    <div className="upload-demo">
      <h3 className="upload-title">上传图片</h3>
      <Upload
        accept="image/png"
        action="//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
        max={1}
        multiple={false}
        sizeLimit={{ size: 3000000, unit: 'B' }}
        onValidate={onValidate}
      />
    </div>
  );
}
