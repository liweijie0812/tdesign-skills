<!--
  TDesign UniApp 示例：Form 表单页

  覆盖组件：Form, FormItem, Input, Radio, Button

  说明：展示 TDesign UniApp 的典型写法 —— Vue SFC 模板、easycom 自动引入、
  @event 事件绑定（非小程序 bind:event）、kebab-case 属性。

  与小程序的关键差异：
  - 事件使用 @event，不是 bind:event
  - 无需 usingComponents（easycom 自动引入）
  - 模板使用 Vue 语法（v-model、v-if、v-for）
-->
<template>
  <view class="page">
    <t-form @submit="onSubmit">
      <t-form-item label="姓名" name="name">
        <t-input v-model="formData.name" placeholder="请输入姓名" />
      </t-form-item>

      <t-form-item label="邮箱" name="email">
        <t-input v-model="formData.email" placeholder="请输入邮箱" />
      </t-form-item>

      <t-form-item label="性别" name="gender">
        <t-radio-group v-model="formData.gender">
          <t-radio value="male" label="男" />
          <t-radio value="female" label="女" />
        </t-radio-group>
      </t-form-item>

      <t-form-item>
        <t-button theme="primary" form-type="submit" :loading="loading" block>提交</t-button>
      </t-form-item>
    </t-form>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      formData: {
        name: '',
        email: '',
        gender: '',
      },
    };
  },
  methods: {
    onSubmit(e) {
      const { formData } = this;

      if (!formData.name) {
        uni.showToast({ title: '请输入姓名', icon: 'none' });
        return;
      }
      if (!formData.email) {
        uni.showToast({ title: '请输入邮箱', icon: 'none' });
        return;
      }

      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        uni.showToast({ title: '提交成功', icon: 'success' });
      }, 1000);
    },
  },
};
</script>

<style scoped>
.page {
  padding: 32rpx;
}
</style>
