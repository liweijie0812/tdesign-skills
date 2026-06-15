<!--
  TDesign Vue Next 示例：标准表单页

  覆盖组件：Card, Form, FormItem, Input, Select, DatePicker, Switch, Button, Message
-->
<script setup lang="ts">
import { reactive, shallowRef } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';

const submitting = shallowRef(false);

const formData = reactive({
  name: '',
  owner: '',
  type: '',
  effectiveDate: '',
  enabled: true,
});

const typeOptions = [
  { label: '业务配置', value: 'business' },
  { label: '权限配置', value: 'permission' },
  { label: '通知配置', value: 'notice' },
];

const rules = {
  name: [{ required: true, message: '请输入配置名称', trigger: 'blur' }],
  owner: [{ required: true, message: '请输入负责人', trigger: 'blur' }],
  type: [{ required: true, message: '请选择配置类型', trigger: 'change' }],
};

function onSubmit({ validateResult }: { validateResult: boolean | Record<string, unknown> }) {
  if (validateResult !== true) return;

  submitting.value = true;
  window.setTimeout(() => {
    submitting.value = false;
    MessagePlugin.success('提交成功');
  }, 600);
}

function onReset() {
  MessagePlugin.info('已恢复初始值');
}
</script>

<template>
  <section class="form-page">
    <div>
      <h1 class="form-page__title">新增配置</h1>
      <p class="form-page__description">填写配置基础信息，提交后进入审批流程。</p>
    </div>

    <t-card title="基础信息" :bordered="false">
      <t-form
        class="form-page__form"
        :data="formData"
        :rules="rules"
        label-width="120px"
        @submit="onSubmit"
        @reset="onReset"
      >
        <t-form-item label="配置名称" name="name">
          <t-input v-model="formData.name" clearable placeholder="请输入配置名称" />
        </t-form-item>
        <t-form-item label="负责人" name="owner">
          <t-input v-model="formData.owner" clearable placeholder="请输入负责人" />
        </t-form-item>
        <t-form-item label="配置类型" name="type">
          <t-select v-model="formData.type" placeholder="请选择配置类型" :options="typeOptions" />
        </t-form-item>
        <t-form-item label="生效日期" name="effectiveDate">
          <t-date-picker v-model="formData.effectiveDate" placeholder="请选择生效日期" />
        </t-form-item>
        <t-form-item label="是否启用" name="enabled">
          <t-switch v-model="formData.enabled" />
        </t-form-item>
        <t-form-item>
          <t-space>
            <t-button theme="primary" type="submit" :loading="submitting">提交</t-button>
            <t-button theme="default" variant="outline" type="reset">重置</t-button>
          </t-space>
        </t-form-item>
      </t-form>
    </t-card>
  </section>
</template>

<style scoped>
.form-page {
  display: flex;
  flex-direction: column;
  gap: var(--td-size-6);
  min-height: 100%;
  padding: var(--td-size-8);
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
}

.form-page__title {
  margin: 0;
  color: var(--td-text-color-primary);
  font: var(--td-font-headline-small);
}

.form-page__description {
  margin: var(--td-size-2) 0 0;
  color: var(--td-text-color-secondary);
  font: var(--td-font-body-medium);
}

.form-page__form {
  max-width: calc(var(--td-size-13) * 12);
}
</style>
