/**
 * TDesign TDesign Mobile React 示例：dialog - plugin
 * 覆盖组件：Dialog
 * 来源：组件库源码 src/dialog/_example/plugin.tsx
 */

import React from 'react';
import { Dialog, Button } from 'tdesign-mobile-react';

const PluginUsage = React.memo(() => (
  <div className="t-dialog__demo-wrap">
    <Button
      variant="outline"
      size="large"
      theme="primary"
      block
      onClick={() => {
        Dialog.confirm({
          visible: true,
          title: '对话框标题',
          content: '告知当前状态、信息和解决方法，等内容。描述文案尽可能控制在三行内',
          confirmBtn: '确认',
          cancelBtn: false,
        });
      }}
    >
      命令行操作
    </Button>
  </div>
));

export default PluginUsage;
