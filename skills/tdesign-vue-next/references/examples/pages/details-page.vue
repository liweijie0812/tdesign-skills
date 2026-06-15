<!--
  TDesign Vue Next 示例：详情页

  覆盖组件：Card, Descriptions, DescriptionsItem, Tag, Timeline, TimelineItem, Button, Message
-->
<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';

type DetailStatus = 'success' | 'warning' | 'default';

const detail = {
  name: '权限变更申请',
  owner: '平台组',
  applicant: '李雷',
  createdAt: '2026-06-12 10:30',
  status: 'warning' as DetailStatus,
  description: '为运营后台新增资源审批、角色授权和数据导出权限。',
};

const records = [
  { label: '2026-06-12 10:30', content: '申请人提交权限变更申请', dotColor: 'primary' },
  { label: '2026-06-12 11:00', content: '直属负责人完成初审', dotColor: 'primary' },
  { label: '2026-06-12 14:20', content: '安全组等待补充说明', dotColor: 'warning' },
];

function onApprove() {
  MessagePlugin.success('已通过申请');
}

function onReject() {
  MessagePlugin.warning('已退回申请');
}
</script>

<template>
  <section class="details-page">
    <div class="details-page__header">
      <div>
        <h1 class="details-page__title">申请详情</h1>
        <p class="details-page__description">查看对象信息、当前状态和处理轨迹。</p>
      </div>
      <t-space>
        <t-button theme="default" variant="outline" @click="onReject">退回</t-button>
        <t-button theme="primary" @click="onApprove">通过</t-button>
      </t-space>
    </div>

    <div class="details-page__content">
      <t-card title="基础信息" :bordered="false">
        <t-descriptions :column="2" bordered>
          <t-descriptions-item label="申请名称">{{ detail.name }}</t-descriptions-item>
          <t-descriptions-item label="所属团队">{{ detail.owner }}</t-descriptions-item>
          <t-descriptions-item label="申请人">{{ detail.applicant }}</t-descriptions-item>
          <t-descriptions-item label="提交时间">{{ detail.createdAt }}</t-descriptions-item>
          <t-descriptions-item label="当前状态">
            <t-tag v-if="detail.status === 'success'" theme="success" variant="light">已通过</t-tag>
            <t-tag v-else-if="detail.status === 'warning'" theme="warning" variant="light">待补充</t-tag>
            <t-tag v-else variant="light">处理中</t-tag>
          </t-descriptions-item>
          <t-descriptions-item label="说明" :span="2">{{ detail.description }}</t-descriptions-item>
        </t-descriptions>
      </t-card>

      <t-card title="处理记录" :bordered="false">
        <t-timeline mode="same">
          <t-timeline-item
            v-for="record in records"
            :key="record.label"
            :label="record.label"
            :content="record.content"
            :dot-color="record.dotColor"
          />
        </t-timeline>
      </t-card>
    </div>
  </section>
</template>

<style scoped>
.details-page {
  display: flex;
  flex-direction: column;
  gap: var(--td-size-6);
  min-height: 100%;
  padding: var(--td-size-8);
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
}

.details-page__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--td-size-4);
}

.details-page__title {
  margin: 0;
  color: var(--td-text-color-primary);
  font: var(--td-font-headline-small);
}

.details-page__description {
  margin: var(--td-size-2) 0 0;
  color: var(--td-text-color-secondary);
  font: var(--td-font-body-medium);
}

.details-page__content {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: var(--td-size-6);
}

@media (max-width: 768px) {
  .details-page__header {
    align-items: flex-start;
    flex-direction: column;
  }

  .details-page__content {
    grid-template-columns: 1fr;
  }
}
</style>
