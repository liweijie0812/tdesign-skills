<!--
  TDesign TDesign Vue Next 示例：tooltip - with-popup-or-popconfirm
  覆盖组件：Tooltip
  来源：组件库源码 packages/components/tooltip/_example/with-popup-or-popconfirm.vue
-->

<template>
  <t-space>
    <t-popup content="Popup 内容" trigger="click">
      <!-- 在中间包一层元素 -->
      <!-- 搭配 Popconfirm 同理 -->
      <div style="display: inline-block">
        <t-tooltip placement="bottom" content="Tooltip 内容">
          <t-button>Tooltip 在 Popup 内部</t-button>
        </t-tooltip>
      </div>
    </t-popup>

    <t-tooltip placement="bottom" content="Tooltip 内容">
      <div style="display: inline-block">
        <t-popup content="Popup 内容" trigger="click">
          <t-button>Popup 在 Tooltip 内部</t-button>
        </t-popup>
      </div>
    </t-tooltip>
  </t-space>
</template>
