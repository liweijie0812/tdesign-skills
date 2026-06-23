<!--
  TDesign TDesign Vue Next 示例：space - combination
  覆盖组件：Space
  来源：组件库源码 packages/components/space/_example/combination.vue
-->

<template>
  <t-space direction="vertical">
    <t-button>Button</t-button>
    <t-button>Button</t-button>
    <t-button>Button</t-button>
    <t-space>
      <template v-if="true">
        <t-button>Button</t-button>
        <t-button>Button</t-button>
        <t-button v-if="false">Button</t-button>
        <t-button>Button</t-button>
        <!-- <t-button v-if="false">Button</t-button> -->
        <t-button v-if="true">Button</t-button>
      </template>
      <t-button>Button</t-button>
    </t-space>
  </t-space>
</template>
