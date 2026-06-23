<!--
  TDesign TDesign Vue Next 示例：layout - base
  覆盖组件：Layout
  来源：组件库源码 packages/components/layout/_example/base.vue
-->

<template>
  <t-space direction="vertical">
    <div>
      <t-layout>
        <t-header>Header</t-header>
        <t-content>Content</t-content>
        <t-footer>Footer</t-footer>
      </t-layout>
    </div>

    <div>
      <t-layout>
        <t-header>Header</t-header>
        <t-layout>
          <t-aside>Aside</t-aside>
          <t-content>Content</t-content>
        </t-layout>
        <t-footer>Footer</t-footer>
      </t-layout>
    </div>

    <div>
      <t-layout>
        <t-header>Header</t-header>
        <t-layout>
          <t-content>Content</t-content>
          <t-aside>Aside</t-aside>
        </t-layout>
        <t-footer>Footer</t-footer>
      </t-layout>
    </div>

    <div>
      <t-layout>
        <t-aside>Aside</t-aside>
        <t-layout>
          <t-header>Header</t-header>
          <t-content>Content</t-content>
          <t-footer>Footer</t-footer>
        </t-layout>
      </t-layout>
    </div>
  </t-space>
</template>
