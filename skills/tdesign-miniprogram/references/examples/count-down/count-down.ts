<!--
  TDesign TDesign Miniprogram 示例：count-down - count-down
  覆盖组件：Count-down
  来源：组件库源码 packages/components/count-down/_example/count-down.wxml
-->

Page({
  data: {
    time: 96 * 60 * 1000,
    time1: 46 * 60 * 1000,
    timeData: {},
    counting: false,
  },
  onChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },
  start() {
    const countDown = this.selectComponent('.control-count-down');
    if (!countDown.counting) {
      countDown.start();
      this.setData({ counting: true });
    } else {
      countDown.pause();
      this.setData({ counting: false });
    }
  },

  reset() {
    const countDown = this.selectComponent('.control-count-down');
    countDown.reset();
  },

  finished() {
    wx.showToast({
      icon: 'none',
      title: '倒计时结束',
    });
    this.setData({ counting: false });
  },
});
