<!--
  TDesign Vue Next 示例：登录页

  覆盖组件：Card, Form, FormItem, Input, Button, Alert, Message
-->
<script setup lang="ts">
import { reactive, shallowRef } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';

const submitting = shallowRef(false);
const errorMessage = shallowRef('');

const loginForm = reactive({
  account: '',
  password: '',
});

const rules = {
  account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

function onSubmit({ validateResult }: { validateResult: boolean | Record<string, unknown> }) {
  if (validateResult !== true) {
    errorMessage.value = '请检查账号和密码后再提交';
    return;
  }

  errorMessage.value = '';
  submitting.value = true;
  window.setTimeout(() => {
    submitting.value = false;
    MessagePlugin.success('登录成功');
  }, 600);
}
</script>

<template>
  <section class="login-page">
    <div class="login-page__hero">
      <p class="login-page__eyebrow">TDesign Admin</p>
      <h1 class="login-page__title">统一身份入口</h1>
      <p class="login-page__description">使用真实 TDesign Form、Input 和 Button 组织登录流程。</p>
    </div>

    <div class="login-page__panel">
      <t-card class="login-page__card" :bordered="false">
        <div class="login-page__form-title">
          <h2 class="login-page__subtitle">登录控制台</h2>
          <p class="login-page__hint">请输入账号信息继续访问。</p>
        </div>

        <t-alert v-if="errorMessage" theme="error" :message="errorMessage" />

        <t-form :data="loginForm" :rules="rules" label-width="0" @submit="onSubmit">
          <t-form-item name="account">
            <t-input v-model="loginForm.account" clearable placeholder="请输入账号" />
          </t-form-item>
          <t-form-item name="password">
            <t-input v-model="loginForm.password" clearable type="password" placeholder="请输入密码" />
          </t-form-item>
          <t-form-item>
            <t-button class="login-page__submit" theme="primary" type="submit" :loading="submitting">
              登录
            </t-button>
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </section>
</template>

<style scoped>
.login-page {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, calc(var(--td-size-13) * 5));
  min-height: 100vh;
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
}

.login-page__hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--td-size-4);
  padding: var(--td-size-12);
  background: var(--td-brand-color);
  color: var(--td-text-color-anti);
}

.login-page__eyebrow {
  margin: 0;
  color: var(--td-text-color-anti);
  font: var(--td-font-title-medium);
}

.login-page__title {
  margin: 0;
  color: var(--td-text-color-anti);
  font: var(--td-font-display-medium);
}

.login-page__description {
  max-width: calc(var(--td-size-13) * 5);
  margin: 0;
  color: var(--td-text-color-anti);
  font: var(--td-font-body-large);
}

.login-page__panel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--td-size-8);
}

.login-page__card {
  width: 100%;
  max-width: calc(var(--td-size-13) * 4);
  box-shadow: var(--td-shadow-2);
}

.login-page__form-title {
  margin-bottom: var(--td-size-6);
}

.login-page__subtitle {
  margin: 0;
  color: var(--td-text-color-primary);
  font: var(--td-font-headline-small);
}

.login-page__hint {
  margin: var(--td-size-2) 0 0;
  color: var(--td-text-color-secondary);
  font: var(--td-font-body-medium);
}

.login-page__submit {
  width: 100%;
}

@media (max-width: 768px) {
  .login-page {
    grid-template-columns: 1fr;
  }

  .login-page__hero {
    min-height: calc(var(--td-size-13) * 3);
    padding: var(--td-size-8);
  }
}
</style>
