/**
 * TDesign TDesign React 示例：swiper - vertical
 * 覆盖组件：Swiper
 * 来源：组件库源码 packages/components/swiper/_example/vertical.tsx
 */

import React from 'react';
import { Swiper } from 'tdesign-react';

const { SwiperItem } = Swiper;

export default function BasicSwiper() {
  return (
    <div className="tdesign-demo-block--swiper">
      <Swiper direction={'vertical'} navigation={{ showSlideBtn: 'never' }} height={280}>
        <SwiperItem>
          <div className="demo-item">1</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">2</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">3</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">4</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">5</div>
        </SwiperItem>
        <SwiperItem>
          <div className="demo-item">6</div>
        </SwiperItem>
      </Swiper>
    </div>
  );
}
