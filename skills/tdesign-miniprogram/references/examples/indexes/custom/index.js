<!--
  TDesign TDesign Miniprogram 示例：indexes - index
  覆盖组件：Indexes
  来源：组件库源码 packages/components/indexes/_example/index.wxml
-->

const children = new Array(5).fill('列表内容');

const list = [
  {
    index: 1,
    children,
  },
  {
    index: 3,
    children,
  },
  {
    index: 5,
    children,
  },
  {
    index: 7,
    children,
  },
  {
    index: 8,
    children,
  },
  {
    index: 10,
    children,
  },
  {
    index: '#',
    children,
  },
];

Page({
  data: {
    list,
    indexList: list.map((item) => item.index),
    curIndex: '',
    stickyOffset: 0,
  },

  onLoad() {
    this.getCustomNavbarHeight();
  },

  onChange(e) {
    const { index } = e.detail;

    console.log(index);
    this.setData({
      curIndex: index,
    });
  },

  getCustomNavbarHeight() {
    const query = wx.createSelectorQuery();
    query.select('.custom-navbar').boundingClientRect();
    query.exec((res) => {
      const { height = 0 } = res[0] || {};
      this.setData({ stickyOffset: height });
    });
  },
});
