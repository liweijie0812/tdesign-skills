<!--
  TDesign Vue Next 示例：Dashboard 仪表盘

  覆盖组件：Card, Row, Col, Statistic, Table, Tag, Empty
-->
<script setup lang="ts">
const metrics = [
  { title: '今日访问', value: 12890, unit: '次', trend: 'increase' },
  { title: '转化率', value: 18.6, unit: '%', trend: 'increase' },
  { title: '异常任务', value: 7, unit: '项', trend: 'decrease' },
  { title: '待处理工单', value: 43, unit: '单', trend: 'increase' },
] as const;

const tableData = [
  { id: 1, name: '权限配置同步', owner: '平台组', status: 'success' },
  { id: 2, name: '资源巡检任务', owner: '运维组', status: 'warning' },
  { id: 3, name: '账单导出流程', owner: '财务组', status: 'default' },
];

const columns = [
  { colKey: 'name', title: '任务名称', ellipsis: true },
  { colKey: 'owner', title: '负责人' },
  { colKey: 'status', title: '状态', cell: 'status' },
];
</script>

<template>
  <section class="dashboard-page">
    <div class="dashboard-page__header">
      <div>
        <h1 class="dashboard-page__title">仪表盘</h1>
        <p class="dashboard-page__description">关键指标、任务状态和趋势概览。</p>
      </div>
    </div>

    <t-row :gutter="[24, 24]">
      <t-col v-for="metric in metrics" :key="metric.title" :xs="12" :sm="6" :xl="3">
        <t-card class="dashboard-page__metric" :bordered="false">
          <t-statistic
            :title="metric.title"
            :value="metric.value"
            :unit="metric.unit"
            :trend="metric.trend"
          />
        </t-card>
      </t-col>
    </t-row>

    <t-row :gutter="[24, 24]">
      <t-col :xs="12" :lg="8">
        <t-card title="近期任务" :bordered="false">
          <t-table row-key="id" :data="tableData" :columns="columns" hover>
            <template #status="{ row }">
              <t-tag v-if="row.status === 'success'" theme="success" variant="light">正常</t-tag>
              <t-tag v-else-if="row.status === 'warning'" theme="warning" variant="light">需关注</t-tag>
              <t-tag v-else variant="light">待处理</t-tag>
            </template>
          </t-table>
        </t-card>
      </t-col>
      <t-col :xs="12" :lg="4">
        <t-card title="趋势分析" :bordered="false">
          <t-empty description="接入项目图表库后展示趋势图" />
        </t-card>
      </t-col>
    </t-row>
  </section>
</template>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  gap: var(--td-size-8);
  min-height: 100%;
  padding: var(--td-size-8);
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
}

.dashboard-page__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashboard-page__title {
  margin: 0;
  color: var(--td-text-color-primary);
  font: var(--td-font-headline-small);
}

.dashboard-page__description {
  margin: var(--td-size-2) 0 0;
  color: var(--td-text-color-secondary);
  font: var(--td-font-body-medium);
}

.dashboard-page__metric {
  background: var(--td-bg-color-container);
  box-shadow: var(--td-shadow-1);
}
</style>
