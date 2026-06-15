<!--
  TDesign Vue Next 示例：左侧导航应用壳

  覆盖组件：Layout, Header, Aside, Content, Menu, Breadcrumb, Button, Avatar
-->
<script setup lang="ts">
import { shallowRef } from 'vue';

const activeMenu = shallowRef('dashboard');
const expandedMenus = shallowRef(['workspace']);
</script>

<template>
  <t-layout class="admin-shell">
    <t-aside width="232px" class="admin-shell__aside">
      <div class="admin-shell__brand">控制台</div>
      <t-menu v-model="activeMenu" v-model:expanded="expandedMenus" theme="light" width="232px">
        <t-submenu value="workspace" title="工作台">
          <t-menu-item value="dashboard">仪表盘</t-menu-item>
          <t-menu-item value="table">资源列表</t-menu-item>
        </t-submenu>
        <t-menu-item value="settings">系统配置</t-menu-item>
      </t-menu>
    </t-aside>

    <t-layout>
      <t-header class="admin-shell__header">
        <t-breadcrumb :options="[{ content: '首页' }, { content: '仪表盘' }]" />
        <div class="admin-shell__header-actions">
          <t-button variant="text">帮助</t-button>
          <t-avatar class="admin-shell__avatar">TD</t-avatar>
        </div>
      </t-header>

      <t-content class="admin-shell__content">
        <slot>
          <t-card title="页面内容">请在此放置业务页面。</t-card>
        </slot>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<style scoped>
.admin-shell {
  min-height: 100vh;
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
}

.admin-shell__aside {
  background: var(--td-bg-color-container);
  border-right: 1px solid var(--td-component-stroke);
}

.admin-shell__brand {
  height: var(--td-comp-size-xxxl);
  min-height: var(--td-comp-size-xxxl);
  display: flex;
  align-items: center;
  padding: 0 var(--td-size-8);
  color: var(--td-text-color-primary);
  font: var(--td-font-title-medium);
  border-bottom: 1px solid var(--td-component-stroke);
}

.admin-shell__header {
  height: var(--td-comp-size-xxxl);
  min-height: var(--td-comp-size-xxxl);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--td-size-8);
  background: var(--td-bg-color-container);
  border-bottom: 1px solid var(--td-component-stroke);
}

.admin-shell__header-actions {
  display: flex;
  align-items: center;
  gap: var(--td-size-4);
}

.admin-shell__avatar {
  background: var(--td-brand-color);
  color: var(--td-text-color-anti);
}

.admin-shell__content {
  padding: var(--td-size-8);
}
</style>
