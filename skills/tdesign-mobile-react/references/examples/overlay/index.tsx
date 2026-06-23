/**
 * TDesign TDesign Mobile React 示例：overlay - index
 * 覆盖组件：Overlay
 * 来源：组件库源码 src/overlay/_example/index.tsx
 */

import React from 'react';
import TDemoBlock from '../../../site/mobile/components/DemoBlock';
import TDemoHeader from '../../../site/mobile/components/DemoHeader';
import BaseDemo from './base';

import './style/index.less';

export default function ProgressDemo() {
  return (
    <div className="tdesign-mobile-demo">
      <TDemoHeader title="Overlay 遮罩层" summary="通过遮罩层，可以强调部分内容" />
      <TDemoBlock title="01 组件" summary="基础遮罩层" padding={true}>
        <BaseDemo />
      </TDemoBlock>
    </div>
  );
}
