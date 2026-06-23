/**
 * TDesign TDesign Mobile React 示例：typography - base
 * 覆盖组件：Typography
 * 来源：组件库源码 src/typography/_example/base.tsx
 */

import React from 'react';
import { TypographyText } from 'tdesign-mobile-react';

import './style/index.less';

export default function BaseDemo() {
  return (
    <div className="tdesign-mobile-typography-demo">
      <TypographyText>TDesign 是腾讯各业务团队在服务业务过程中沉淀的一套企业级设计体系。</TypographyText>
    </div>
  );
}
