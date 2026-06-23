/**
 * TDesign TDesign Mobile React 示例：navbar - custom-color
 * 覆盖组件：Navbar
 * 来源：组件库源码 src/navbar/_example/custom-color.tsx
 */

import React from 'react';
import { Navbar } from 'tdesign-mobile-react';
import { EllipsisIcon, HomeIcon } from 'tdesign-icons-react';

const CustomColorDemo = () => (
  <>
    <Navbar
      title="标题文字"
      leftArrow
      fixed={false}
      className="custom-navbar"
      right={
        <>
          <HomeIcon size={24} />
          <EllipsisIcon size={24} />
        </>
      }
    />
  </>
);

export default CustomColorDemo;
