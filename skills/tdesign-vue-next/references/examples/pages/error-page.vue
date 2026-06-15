<!--
  TDesign Vue Next 示例：错误页

  覆盖组件：Card, Empty, Button
-->
<script setup lang="ts">
import { computed, shallowRef } from 'vue';

type ErrorCode = '403' | '404' | '500';

const currentCode = shallowRef<ErrorCode>('404');

const errorStates = [
  { code: '403', title: '无访问权限', description: '当前账号暂无访问该资源的权限。', type: 'fail' },
  { code: '404', title: '页面不存在', description: '请检查访问地址，或返回首页继续浏览。', type: 'empty' },
  { code: '500', title: '服务暂不可用', description: '系统正在恢复，请稍后重试。', type: 'network-error' },
] as const;

const currentError = computed(() => errorStates.find((item) => item.code === currentCode.value) ?? errorStates[1]);

function onGoHome() {
  window.location.assign('/');
}

function onBack() {
  window.history.back();
}
</script>

<template>
  <section class="error-page">
    <t-card class="error-page__card" :bordered="false">
      <div class="error-page__switcher">
        <t-button
          v-for="item in errorStates"
          :key="item.code"
          :theme="item.code === currentCode ? 'primary' : 'default'"
          :variant="item.code === currentCode ? 'base' : 'outline'"
          @click="currentCode = item.code"
        >
          {{ item.code }}
        </t-button>
      </div>

      <t-empty :type="currentError.type" :title="currentError.title" :description="currentError.description">
        <template #action>
          <t-space>
            <t-button theme="primary" @click="onGoHome">返回首页</t-button>
            <t-button theme="default" variant="outline" @click="onBack">返回上一页</t-button>
          </t-space>
        </template>
      </t-empty>
    </t-card>
  </section>
</template>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--td-size-8);
  background: var(--td-bg-color-page);
  color: var(--td-text-color-primary);
}

.error-page__card {
  width: 100%;
  max-width: calc(var(--td-size-13) * 7);
  padding: var(--td-size-6);
  box-shadow: var(--td-shadow-2);
}

.error-page__switcher {
  display: flex;
  justify-content: center;
  gap: var(--td-size-3);
  margin-bottom: var(--td-size-8);
}

@media (max-width: 768px) {
  .error-page {
    align-items: stretch;
  }

  .error-page__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
