<!--
  TDesign TDesign Vue 2 示例：select - remote-search
  覆盖组件：Select
  来源：组件库源码 src/select/_example/remote-search.vue
-->

<template>
  <!-- 远程搜索场景会改变 options 数组，导致无法检索历史选项，可通过将 valueType 改为 `object` 以从 value 中读取 `label`，解决无法回显的问题 -->

  <t-space>
    <t-select
      v-model="value"
      value-type="object"
      filterable
      placeholder="请选择"
      :onSearch="remoteMethod"
      :loading="loading"
      :options="options"
      style="width: 200px; display: inline-block; margin: 0 20px 20px 0"
    />
  </t-space>
</template>

<script>
export default {
  data() {
    return {
      options: [],
      value: {},
      loading: false,
    };
  },
  methods: {
    remoteMethod(search) {
      console.log('search', search);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.options = [
          {
            value: '腾讯_test1',
            label: '腾讯_test1',
          },
          {
            value: '腾讯_test2',
            label: '腾讯_test2',
          },
          {
            value: '腾讯_test3',
            label: '腾讯_test3',
          },
        ].filter((item) => item.label.includes(search));
      }, 500);
    },
  },
};
</script>
