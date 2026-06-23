<!--
  TDesign TDesign Miniprogram 示例：swiper - index
  覆盖组件：Swiper
  来源：组件库源码 packages/components/swiper/_example/index.wxml
-->

const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
  `${imageCdn}/swiper2.png`,
  `${imageCdn}/swiper1.png`,
];

Component({
  data: {
    current: 2,
    autoplay: true,
    duration: 500,
    interval: 5000,
    paginationPosition: 'bottom-right',
    swiperList,
    navigation: { type: 'fraction' },
  },
});
