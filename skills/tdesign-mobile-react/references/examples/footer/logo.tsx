/**
 * TDesign TDesign Mobile React 示例：footer - logo
 * 覆盖组件：Footer
 * 来源：组件库源码 src/footer/_example/logo.tsx
 */

import React from 'react';
import { Footer } from 'tdesign-mobile-react';

const logo = {
  icon: 'https://tdesign.gtimg.com/mobile/demos/logo1.png',
};
const text = 'Copyright © 2019-2023 TDesign.All Rights Reserved.';

export default function LogoDemo() {
  return (
    <>
      <div className="footer-example">
        <Footer logo={logo} text={text} />
      </div>
      <div className="footer-example">
        <Footer logo={logo} />
      </div>
    </>
  );
}
