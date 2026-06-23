/**
 * TDesign TDesign React 示例：swiper - current
 * 覆盖组件：Swiper
 * 来源：组件库源码 packages/components/swiper/_example/current.tsx
 */

import React, { useState } from 'react';
import { Button, Space, Swiper } from 'tdesign-react';

const { SwiperItem } = Swiper;

export default function BasicSwiper() {
  const [current, setCurrent] = useState(0);
  return (
    <Space direction="vertical" style={{ width: '100%' }} className="tdesign-demo-block--swiper">
      <Swiper current={current} navigation={{ showSlideBtn: 'never' }}>
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

      <Button
        size={'small'}
        onClick={() => {
          setCurrent(current + 2 > 6 ? 0 : current + 1);
        }}
      >
        跳转到第 {current + 2 >= 7 ? 1 : current + 2} 项
      </Button>
    </Space>
  );
}
