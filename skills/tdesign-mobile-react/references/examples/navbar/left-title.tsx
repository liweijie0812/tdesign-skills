/**
 * TDesign TDesign Mobile React 示例：navbar - left-title
 * 覆盖组件：Navbar
 * 来源：组件库源码 src/navbar/_example/left-title.tsx
 */

import React from 'react';
import { Navbar } from 'tdesign-mobile-react';
import { EllipsisIcon, HomeIcon } from 'tdesign-icons-react';

const LeftTitleDemo = () => (
  <>
    <Navbar
      title="标题居中"
      leftArrow
      fixed={false}
      right={
        <>
          <EllipsisIcon size={24} />
        </>
      }
    />
    <Navbar
      leftArrow
      left={<span className="custom-left-title">标题左对齐</span>}
      right={
        <>
          <HomeIcon size={24} />
          <EllipsisIcon size={24} />
        </>
      }
      fixed={false}
    />
  </>
);

export default LeftTitleDemo;
