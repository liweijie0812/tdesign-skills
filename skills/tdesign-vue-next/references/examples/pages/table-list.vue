<!--
  TDesign Vue Next 示例：表格列表页

  覆盖组件：Card, Form, FormItem, Input, Select, Button, Table, Tag, Popconfirm, Message
-->
<script setup lang="ts">
import { computed, reactive, shallowRef } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';

type ResourceStatus = 'running' | 'pending' | 'offline';

interface ResourceRow {
  id: number;
  name: string;
  owner: string;
  status: ResourceStatus;
}

const loading = shallowRef(false);
const keyword = shallowRef('');
const selectedStatus = shallowRef('');

const pagination = reactive({
  current: 1,
  pageSize: 10,
  total: 3,
});

const statusOptions = [
  { label: '运行中', value: 'running' },
  { label: '待处理', value: 'pending' },
  { label: '已下线', value: 'offline' },
];

const data: ResourceRow[] = [
  { id: 1, name: '权限中心', owner: '平台组', status: 'running' },
  { id: 2, name: '账单服务', owner: '财务组', status: 'pending' },
  { id: 3, name: '旧版报表', owner: '数据组', status: 'offline' },
];

const columns = [
  { colKey: 'name', title: '资源名称', ellipsis: true },
  { colKey: 'owner', title: '负责人' },
  { colKey: 'status', title: '状态', cell: 'status' },
  { colKey: 'operation', title: '操作', cell: 'operation', width: 180 },
];

const filteredData = computed(() => {
  return data.filter((item) => {
    const matchKeyword = !keyword.value || item.name.includes(keyword.value);
    const matchStatus = !selectedStatus.value || item.status === selectedStatus.value;
    return matchKeyword && matchStatus;
  });
});

function onSearch() {
  loading.value = true;
  window.setTimeout(() => {
    loading.value = false;
    pagination.current = 1;
    pagination.total = filteredData.value.length;
  }, 400);
}

function onReset() {
  keyword.value = '';
  selectedStatus.value = '';
  pagination.current = 1;
  pagination.total = data.length;
}

function onDelete(row: ResourceRow) {
  MessagePlugin.success(`已删除 ${row.name}`);
}
</script>

<template>
  <section class="table-list-page">
    <div>
      <h1 class="table-list-page__title">资源列表</h1>
      <p class="table-list-page__description">查询、筛选并管理后台资源。</p>
    </div>

    <t-card :bordered="false">
      <t-form layout="inline" label-width="80px" @submit="onSearch" @reset="onReset">
        <t-form-item label="关键词">
          <t-input v-model="keyword" clearable placeholder="请输入资源名称" />
        </t-form-item>
        <t-form-item label="状态">
          <t-select
            v-model="selectedStatus"
            clearable
            placeholder="请选择状态"
            :options="statusOptions"
          />
        </t-form-item>
        <t-form-item>
          <t-space>
            <t-button theme="primary" type="submit" :loading="loading">查询</t-button>
            <t-button theme="default" variant="outline" type="reset">重置</t-button>
          </t-space>
        </t-form-item>
      </t-form>
    </t-card>

    <t-card title="资源数据" :bordered="false">
      <template #actions>
        <t-button theme="primary">新建资源</t-button>
      </template>
      <t-table
        row-key="id"
        :data="filteredData"
        :columns="columns"
        :loading="loading"
        :pagination="pagination"
        hover
      >
        <template #status="{ row }">
          <t-tag v-if="row.status === 'running'" theme="success" variant="light">运行中</t-tag>
          <t-tag v-else-if="row.status === 'pending'" theme="warning" variant="light">待处理</t-tag>
          <t-tag v-else theme="default" variant="light">已下线</t-tag>
        </template>
        <template #operation="{ row }">
          <t-space size="small">
            <t-button variant="text" theme="primary">编辑</t-button>
            <t-popconfirm theme="danger" content="删除后不可恢复，确认删除？" @confirm="onDelete(row)">
              <t-button variant="text" theme="danger">删除</t-button>
            </t-popconfirm>
          </t-space>
        </template>
        <template #empty>
          <t-empty description="暂无匹配数据" />
        </template>
      </t-table>
    </t-card>
  </section>
</template>

<style scoped>
.table-list-page {
  display: flex;
  flex-direction: column;
  gap: var(--td-size-6);
  min-height: 100%;
  padding: var(--td-size-8);
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
}

.table-list-page__title {
  margin: 0;
  color: var(--td-text-color-primary);
  font: var(--td-font-headline-small);
}

.table-list-page__description {
  margin: var(--td-size-2) 0 0;
  color: var(--td-text-color-secondary);
  font: var(--td-font-body-medium);
}
</style>
