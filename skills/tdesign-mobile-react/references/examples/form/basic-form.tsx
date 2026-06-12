/**
 * TDesign Mobile React 示例：Form 表单页
 *
 * 覆盖组件：Form, FormItem, Input, Radio, Button, Toast
 *
 * 说明：展示 TDesign Mobile React 的典型写法 —— 移动端组件标签、受控表单、
 * Toast 反馈、移动端表单布局。
 *
 * 注意：移动端组件集与 Web 不同，例如移动端没有 DatePicker 和 Select，
 * 实际项目应使用 Picker 或自定义选择器。
 */
import React, { useState } from 'react';
import { Form, Input, Radio, Button, Toast } from 'tdesign-mobile-react';

const { FormItem } = Form;

export default function BasicFormPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    if (e.validateResult === true) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        Toast({ message: '提交成功', theme: 'success' });
      }, 1000);
    }
  };

  return (
    <div style={{ padding: 16 }}>
      <Form
        onSubmit={onSubmit}
        rules={{
          name: [{ required: true, message: '请输入姓名' }],
          email: [
            { required: true, message: '请输入邮箱' },
            { email: true, message: '请输入正确的邮箱格式' },
          ],
        }}
      >
        <FormItem label="姓名" name="name">
          <Input placeholder="请输入姓名" />
        </FormItem>

        <FormItem label="邮箱" name="email">
          <Input placeholder="请输入邮箱" />
        </FormItem>

        <FormItem label="性别" name="gender">
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
        </FormItem>

        <FormItem>
          <Button theme="primary" type="submit" loading={loading} block>
            提交
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
