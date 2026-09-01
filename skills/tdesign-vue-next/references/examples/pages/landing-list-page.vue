<!--
  TDesign Vue Next 示例：标准列表页（落地实践 · 组件搭配替代 CSS）

  覆盖组件：Card, Space, Button, Icon, Tag, Table, Link, Dialog, Form, FormItem, Input, Select, Empty, Popconfirm

  落地要点：
  - 工具栏用 t-space size="8" 承载按钮组，不再手写 .toolbar flex 容器。
  - 表格操作列用 t-space size="4" + t-link（主操作 theme="primary"，危险 theme="danger"），不再用 Button variant="text" 或裸 <a>。
  - 空数据给 t-empty；加载中给 :loading。
  - 页面容器 + 标题区（t-typography-title / t-typography-text）+ 主体 t-card 骨架。
-->
<script setup lang="ts">
import { h, reactive, shallowRef } from 'vue';
import type { TableRowData } from 'tdesign-vue-next';
import { MessagePlugin, Tag } from 'tdesign-vue-next';

const loading = shallowRef(false);
const rows = shallowRef<TableRowData[]>([
  { id: 1, name: '颜色管理', owner: '张三', status: '启用', updatedAt: '2026-08-30' },
  { id: 2, name: '印品设置', owner: '李四', status: '停用', updatedAt: '2026-08-29' },
  { id: 3, name: '报价配置', owner: '王五', status: '启用', updatedAt: '2026-08-28' },
]);

const columns = [
  { colKey: 'id', title: 'ID', width: 80 },
  { colKey: 'name', title: '名称', ellipsis: true },
  { colKey: 'owner', title: '负责人', width: 120 },
  {
    colKey: 'status',
    title: '状态',
    width: 100,
    cell: ({ row }: { row: TableRowData }) =>
      h(Tag, { theme: row.status === '启用' ? 'success' : 'default', variant: 'light-outline' }, () => row.status),
  },
  { colKey: 'updatedAt', title: '更新时间', width: 140 },
];

const pagination = { defaultCurrent: 1, defaultPageSize: 20 };

const dialogVisible = shallowRef(false);
const form = reactive({ name: '', owner: '', type: '' });
const typeOptions = [
  { label: '业务配置', value: 'business' },
  { label: '权限配置', value: 'permission' },
];

const rules = {
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
};

function onAdd() {
  dialogVisible.value = true;
}

function onEdit(row: TableRowData) {
  dialogVisible.value = true;
  form.name = String(row.name ?? '');
  form.owner = String(row.owner ?? '');
}

function onRemove(row: TableRowData) {
  rows.value = rows.value.filter((r) => r.id !== row.id);
  MessagePlugin.success('已删除');
}

function onSubmit() {
  dialogVisible.value = false;
  MessagePlugin.success('保存成功');
}
</script>

<template>
  <section class="page-container">
    <div class="page-title-row">
      <t-typography-title :level="3">列表管理</t-typography-title>
      <t-typography-text theme="secondary">对应 legacy：ListManager</t-typography-text>
      <t-space style="margin-left: auto" size="8">
        <t-button theme="primary" @click="onAdd">
          <template #icon><t-icon name="add" /></template>
          新增
        </t-button>
        <t-tag theme="default" variant="outline">共 {{ rows.length }} 项</t-tag>
      </t-space>
    </div>

    <t-card :bordered="false">
      <t-table
        :loading="loading"
        :data="rows"
        :columns="columns"
        :pagination="pagination"
        row-key="id"
      >
        <template #op="{ row }">
          <t-space size="4">
            <t-link theme="primary" size="small" @click="onEdit(row)">编辑</t-link>
            <t-popconfirm content="删除后不可恢复，确定删除？" @confirm="onRemove(row)">
              <t-link theme="danger" size="small">删除</t-link>
            </t-popconfirm>
          </t-space>
        </template>
        <template #empty><t-empty description="暂无数据" /></template>
      </t-table>
    </t-card>

    <t-dialog v-model:visible="dialogVisible" header="新增 / 编辑" width="420px">
      <t-form :data="form" :rules="rules" label-width="80px">
        <t-form-item label="名称" name="name">
          <t-input v-model="form.name" clearable placeholder="请输入名称" />
        </t-form-item>
        <t-form-item label="负责人" name="owner">
          <t-input v-model="form.owner" clearable placeholder="请输入负责人" />
        </t-form-item>
        <t-form-item label="类型" name="type">
          <t-select v-model="form.type" placeholder="请选择类型" :options="typeOptions" />
        </t-form-item>
      </t-form>
    </t-dialog>
  </section>
</template>

<style scoped>
.page-container {
  padding: var(--td-size-8);
}
.page-title-row {
  display: flex;
  align-items: center;
  gap: var(--td-size-3);
  margin-bottom: var(--td-size-5);
}
.page-title-row .t-typography {
  margin: 0;
}
</style>
