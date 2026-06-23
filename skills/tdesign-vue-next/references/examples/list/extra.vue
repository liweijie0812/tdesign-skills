<!--
  TDesign TDesign Vue Next 示例：list - extra
  覆盖组件：List
  来源：组件库源码 packages/components/list/_example/extra.vue
-->

<template>
  <div>
    <t-list :split="true">
      <t-list-item>
        <t-list-item-meta
          image="https://tdesign.gtimg.com/site/avatar.jpg"
          title="列表主内容"
          description="列表内容列表内容"
        />
        <template #action>
          <li><a href="">操作1</a></li>
          <li><a href="">操作2</a></li>
          <li><a href="">操作3</a></li>
        </template>
        <template #extra>
          <div style="height: 100px; line-height: 100px; width: 160px; text-align: center; background: #f0f0f0">
            额外内容
          </div>
        </template>
      </t-list-item>
    </t-list>
  </div>
</template>
