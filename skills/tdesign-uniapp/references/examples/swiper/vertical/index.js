<!--
  TDesign TDesign UniApp 示例：swiper - index
  覆盖组件：Swiper
  来源：组件库源码 packages/components/swiper/_example/index.vue
-->

const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
];
Component({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    navigation: { type: 'dots-bar' },
    paginationPosition: 'right',
  },

  methods: {
    onChange(e) {
      const {
        detail: { current, source },
      } = e;
      console.log(current, source);
    },
    onAutoplayChange(e) {
      this.setData({
        autoplay: e.detail.value,
      });
    },
    onIntervalChange(e) {
      this.setData({
        interval: e.detail.value,
      });
    },
    onDurationChange(e) {
      this.setData({
        duration: e.detail.value,
      });
    },
  },
});
