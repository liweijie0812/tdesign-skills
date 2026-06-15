<!--
  TDesign Vue Next 示例：Form 表单页

  覆盖组件：Form, FormItem, Input, InputNumber, Select, Radio, DatePicker, Button, Message

  说明：展示 TDesign Vue Next 的典型写法 —— SFC 模板、v-model 双向绑定、
  Composition API、具名插槽、rules 校验。
-->
<script setup lang="ts">
import { reactive, shallowRef } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';

const loading = shallowRef(false);

interface BasicFormData {
  name: string;
  email: string;
  age?: number;
  department: string;
  gender: string;
  hireDate: string;
}

const formData = reactive<BasicFormData>({
  name: '',
  email: '',
  age: undefined,
  department: '',
  gender: '',
  hireDate: '',
});

const departmentOptions = [
  { label: '技术部', value: 'tech' },
  { label: '产品部', value: 'product' },
  { label: '设计部', value: 'design' },
];

const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { email: true, message: '请输入正确的邮箱格式', trigger: 'blur' },
  ],
  age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
};

function onSubmit({ validateResult }: { validateResult: boolean | Record<string, unknown> }) {
  if (validateResult !== true) return;

  loading.value = true;
  window.setTimeout(() => {
    loading.value = false;
    MessagePlugin.success('提交成功');
  }, 1000);
}

function onReset() {
  MessagePlugin.info('已重置');
}
</script>

<template>
  <div class="basic-form-example">
    <t-form
      :data="formData"
      :rules="rules"
      label-width="100px"
      layout="vertical"
      @submit="onSubmit"
      @reset="onReset"
    >
      <t-form-item label="姓名" name="name">
        <t-input v-model="formData.name" placeholder="请输入姓名" />
      </t-form-item>

      <t-form-item label="邮箱" name="email">
        <t-input v-model="formData.email" placeholder="请输入邮箱" />
      </t-form-item>

      <t-form-item label="年龄" name="age">
        <t-input-number v-model="formData.age" :min="0" :max="150" placeholder="请输入年龄" />
      </t-form-item>

      <t-form-item label="部门" name="department">
        <t-select
          v-model="formData.department"
          placeholder="请选择部门"
          :options="departmentOptions"
        />
      </t-form-item>

      <t-form-item label="性别" name="gender">
        <t-radio-group v-model="formData.gender">
          <t-radio value="male">男</t-radio>
          <t-radio value="female">女</t-radio>
        </t-radio-group>
      </t-form-item>

      <t-form-item label="入职日期" name="hireDate">
        <t-date-picker v-model="formData.hireDate" placeholder="请选择日期" />
      </t-form-item>

      <t-form-item>
        <t-space>
          <t-button theme="primary" type="submit" :loading="loading">提交</t-button>
          <t-button theme="default" variant="outline" type="reset">重置</t-button>
        </t-space>
      </t-form-item>
    </t-form>
  </div>
</template>

<style scoped>
.basic-form-example {
  max-width: calc(var(--td-size-13) * 12);
  padding: var(--td-size-8);
  background: var(--td-bg-color-container);
  color: var(--td-text-color-primary);
}
</style>
