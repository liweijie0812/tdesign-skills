<!--
  TDesign Vue Next 示例：顶部导航应用壳

  覆盖组件：Layout, Header, Content, HeadMenu, Breadcrumb, Button, Avatar
-->
<script setup lang="ts">
import { shallowRef } from 'vue';

const activeMenu = shallowRef('dashboard');
</script>

<template>
  <t-layout class="top-shell">
    <t-header class="top-shell__header">
      <t-head-menu v-model="activeMenu" theme="light" class="top-shell__menu">
        <template #logo>
          <div class="top-shell__brand">控制台</div>
        </template>
        <t-menu-item value="dashboard">仪表盘</t-menu-item>
        <t-menu-item value="resource">资源管理</t-menu-item>
        <t-menu-item value="settings">系统配置</t-menu-item>
        <template #operations>
          <div class="top-shell__operations">
            <t-button variant="text">帮助</t-button>
            <t-avatar class="top-shell__avatar">TD</t-avatar>
          </div>
        </template>
      </t-head-menu>
    </t-header>

    <t-content class="top-shell__content">
      <t-breadcrumb :options="[{ content: '首页' }, { content: '仪表盘' }]" />
      <slot>
        <t-card title="页面内容">请在此放置业务页面。</t-card>
      </slot>
    </t-content>
  </t-layout>
</template>

<style scoped>
.top-shell {
  min-height: 100vh;
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
}

.top-shell__header {
  height: var(--td-comp-size-xxxl);
  min-height: var(--td-comp-size-xxxl);
  flex-shrink: 0;
  background: var(--td-bg-color-container);
  border-bottom: 1px solid var(--td-component-stroke);
}

.top-shell__menu {
  height: var(--td-comp-size-xxxl);
}

.top-shell__brand {
  padding: 0 var(--td-size-8);
  color: var(--td-text-color-primary);
  font: var(--td-font-title-medium);
}

.top-shell__operations {
  display: flex;
  align-items: center;
  gap: var(--td-size-4);
  padding-right: var(--td-size-8);
}

.top-shell__avatar {
  background: var(--td-brand-color);
  color: var(--td-text-color-anti);
}

.top-shell__content {
  display: flex;
  flex-direction: column;
  gap: var(--td-size-6);
  padding: var(--td-size-8);
}
</style>
