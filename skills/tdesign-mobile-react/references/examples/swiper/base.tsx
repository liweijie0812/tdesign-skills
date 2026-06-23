/**
 * TDesign TDesign Mobile React 示例：swiper - base
 * 覆盖组件：Swiper
 * 来源：组件库源码 src/swiper/_example/base.tsx
 */

import React from 'react';
import { Swiper } from 'tdesign-mobile-react';
import './style/index.less';

export default function Base() {
  const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
  const imageList = [
    `${imageCdn}/swiper1.png`,
    `${imageCdn}/swiper2.png`,
    `${imageCdn}/swiper1.png`,
    `${imageCdn}/swiper2.png`,
    `${imageCdn}/swiper1.png`,
  ];

  const swiperItems = () => (
    <>
      {imageList.map((item, index) => (
        <Swiper.SwiperItem key={index}>
          <img style={{ height: '100%' }} src={item} />
        </Swiper.SwiperItem>
      ))}
    </>
  );

  return (
    <div className="tdesign-demo-block-wrap">
      <Swiper
        height="192px"
        interval={3000}
        duration={500}
        autoplay={true}
        defaultCurrent={1}
        navigation={{ type: 'dots' }}
      >
        {swiperItems()}
      </Swiper>
    </div>
  );
}
