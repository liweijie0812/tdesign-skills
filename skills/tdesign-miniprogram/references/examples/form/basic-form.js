/**
 * TDesign 小程序示例：Form 表单页 — 逻辑文件
 *
 * 配合 basic-form.wxml 使用。
 * 展示 data 数据绑定、bind 事件处理、Message 反馈。
 */
Page({
  data: {
    loading: false,
    formData: {
      name: '',
      email: '',
      gender: '',
    },
  },

  onInputChange(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      [`formData.${field}`]: e.detail.value,
    });
  },

  onGenderChange(e) {
    this.setData({
      'formData.gender': e.detail.value,
    });
  },

  onSubmit(e) {
    const { formData } = this.data;

    if (!formData.name) {
      wx.showToast({ title: '请输入姓名', icon: 'none' });
      return;
    }
    if (!formData.email) {
      wx.showToast({ title: '请输入邮箱', icon: 'none' });
      return;
    }

    this.setData({ loading: true });
    setTimeout(() => {
      this.setData({ loading: false });
      wx.showToast({ title: '提交成功', icon: 'success' });
    }, 1000);
  },
});
