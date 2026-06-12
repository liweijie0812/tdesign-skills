/**
 * TDesign React 示例：Form 表单页
 *
 * 覆盖组件：Form, FormItem, Input, InputNumber, Select, Radio, DatePicker, Button, Message
 *
 * 说明：展示 TDesign React 的典型写法 —— JSX 组件标签、受控表单、
 * Form.useForm() 实例、rules 校验、onSubmit 提交。
 */
import React, { useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  DatePicker,
  Button,
  Message,
  Space,
} from 'tdesign-react';

const { FormItem } = Form;

export default function BasicFormPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    if (e.validateResult === true) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Message.success('提交成功');
      }, 1000);
    }
  };

  const onReset = () => {
    form.reset();
    Message.info('已重置');
  };

  return (
    <div style={{ maxWidth: 600, padding: 24 }}>
      <Form
        form={form}
        labelWidth={100}
        layout="vertical"
        onSubmit={onSubmit}
        rules={{
          name: [{ required: true, message: '请输入姓名' }],
          email: [
            { required: true, message: '请输入邮箱' },
            { email: true, message: '请输入正确的邮箱格式' },
          ],
          age: [{ required: true, message: '请输入年龄' }],
        }}
      >
        <FormItem label="姓名" name="name">
          <Input placeholder="请输入姓名" />
        </FormItem>

        <FormItem label="邮箱" name="email">
          <Input placeholder="请输入邮箱" />
        </FormItem>

        <FormItem label="年龄" name="age">
          <InputNumber min={0} max={150} placeholder="请输入年龄" />
        </FormItem>

        <FormItem label="部门" name="department">
          <Select
            placeholder="请选择部门"
            options={[
              { label: '技术部', value: 'tech' },
              { label: '产品部', value: 'product' },
              { label: '设计部', value: 'design' },
            ]}
          />
        </FormItem>

        <FormItem label="性别" name="gender">
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem label="入职日期" name="hireDate">
          <DatePicker placeholder="请选择日期" />
        </FormItem>

        <FormItem>
          <Space>
            <Button theme="primary" type="submit" loading={loading}>
              提交
            </Button>
            <Button theme="default" variant="outline" onClick={onReset}>
              重置
            </Button>
          </Space>
        </FormItem>
      </Form>
    </div>
  );
}
