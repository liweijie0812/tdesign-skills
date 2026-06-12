<!--
  TDesign Mobile Vue 示例：Form 表单页

  覆盖组件：Form, FormItem, Input, Radio, Button, Toast

  说明：展示 TDesign Mobile Vue 的典型写法 —— SFC 模板、v-model、
  Composition API、Toast 反馈、移动端表单布局。

  注意：移动端组件集与 Web 不同，实际项目应确认组件可用性后再使用。
-->
<template>
  <div style="padding: 16px">
    <t-form
      ref="formRef"
      :data="formData"
      :rules="rules"
      @submit="onSubmit"
    >
      <t-form-item label="姓名" name="name">
        <t-input v-model="formData.name" placeholder="请输入姓名" />
      </t-form-item>

      <t-form-item label="邮箱" name="email">
        <t-input v-model="formData.email" placeholder="请输入邮箱" />
      </t-form-item>

      <t-form-item label="性别" name="gender">
        <t-radio-group v-model="formData.gender">
          <t-radio value="male">男</t-radio>
          <t-radio value="female">女</t-radio>
        </t-radio-group>
      </t-form-item>

      <t-form-item>
        <t-button theme="primary" type="submit" :loading="loading" block>提交</t-button>
      </t-form-item>
    </t-form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { Toast } from 'tdesign-mobile-vue';

const formRef = ref(null);
const loading = ref(false);

const formData = reactive({
  name: '',
  email: '',
  gender: '',
});

const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { email: true, message: '请输入正确的邮箱格式', trigger: 'blur' },
  ],
};

const onSubmit = ({ validateResult }) => {
  if (validateResult === true) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      Toast({ message: '提交成功', theme: 'success' });
    }, 1000);
  }
};
</script>
