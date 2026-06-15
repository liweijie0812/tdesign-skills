<!--
  TDesign Vue Next 示例：混合导航应用壳

  覆盖组件：Layout, Header, Aside, Content, HeadMenu, Menu, Breadcrumb, Avatar
-->
<script setup lang="ts">
import { shallowRef } from 'vue';

const activeTopMenu = shallowRef('workspace');
const activeSideMenu = shallowRef('overview');
</script>

<template>
  <t-layout class="mix-shell">
    <t-header class="mix-shell__header">
      <t-head-menu v-model="activeTopMenu" theme="light" class="mix-shell__head-menu">
        <template #logo>
          <div class="mix-shell__brand">控制台</div>
        </template>
        <t-menu-item value="workspace">工作台</t-menu-item>
        <t-menu-item value="operation">运营管理</t-menu-item>
        <t-menu-item value="system">系统设置</t-menu-item>
        <template #operations>
          <t-avatar class="mix-shell__avatar">TD</t-avatar>
        </template>
      </t-head-menu>
    </t-header>

    <t-layout>
      <t-aside width="232px" class="mix-shell__aside">
        <t-menu v-model="activeSideMenu" theme="light" width="232px">
          <t-menu-item value="overview">概览</t-menu-item>
          <t-menu-item value="analysis">分析</t-menu-item>
          <t-menu-item value="records">记录</t-menu-item>
        </t-menu>
      </t-aside>

      <t-content class="mix-shell__content">
        <t-breadcrumb :options="[{ content: '工作台' }, { content: '概览' }]" />
        <slot>
          <t-card title="页面内容">请在此放置业务页面。</t-card>
        </slot>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<style scoped>
.mix-shell {
  min-height: 100vh;
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
}

.mix-shell__header {
  height: var(--td-comp-size-xxxl);
  min-height: var(--td-comp-size-xxxl);
  flex-shrink: 0;
  background: var(--td-bg-color-container);
  border-bottom: 1px solid var(--td-component-stroke);
}

.mix-shell__head-menu {
  height: var(--td-comp-size-xxxl);
}

.mix-shell__brand {
  padding: 0 var(--td-size-8);
  color: var(--td-text-color-primary);
  font: var(--td-font-title-medium);
}

.mix-shell__avatar {
  margin-right: var(--td-size-8);
  background: var(--td-brand-color);
  color: var(--td-text-color-anti);
}

.mix-shell__aside {
  background: var(--td-bg-color-container);
  border-right: 1px solid var(--td-component-stroke);
}

.mix-shell__content {
  display: flex;
  flex-direction: column;
  gap: var(--td-size-6);
  padding: var(--td-size-8);
}
</style>
