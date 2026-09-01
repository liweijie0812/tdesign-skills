# TDesign Vue Next 示例索引

本目录包含从 TDesign Vue Next 组件库源码自动提取的示例代码（已精简，每组件仅保留基础示例和关键变体）。

导入方式：`import { Component } from 'tdesign-vue-next'`

## 覆盖组件

| 组件 | 目录 | 保留示例数 | 关键示例 |
|------|------|------------|----------|
| Affix | `affix/` | 1 | base.vue |
| Alert | `alert/` | 1 | base.vue |
| Anchor | `anchor/` | 3 | base.vue, custom-scroll.vue, multiple.vue |
| Auto-complete | `auto-complete/` | 1 | base.vue |
| Avatar | `avatar/` | 4 | base.vue, group-cascading.vue, group-max.vue, group.vue |
| Back-top | `back-top/` | 3 | baseList.vue, baseListSmall.vue, custom.vue |
| Badge | `badge/` | 2 | base.vue, custom.vue |
| Breadcrumb | `breadcrumb/` | 3 | base.vue, custom-ellipsis.vue, custom.vue |
| Button | `button/` | 4 | base.vue, custom-element.vue, group.vue, loading.vue |
| Calendar | `calendar/` | 4 | base.vue, controller-config.vue, events.vue, slot-props-api.vue |
| Card | `card/` | 2 | base.vue, custom-loading-props.vue |
| Cascader | `cascader/` | 6 | base.vue, column-slot.vue, custom-options.vue, disabled.vue |
| Checkbox | `checkbox/` | 3 | base.vue, controlled.vue, group.vue |
| Collapse | `collapse/` | 2 | base.vue, rightSlot.vue |
| Color-picker | `color-picker/` | 1 | panel.vue |
| Comment | `comment/` | 2 | base.vue, reply-form.vue |
| Config-provider | `config-provider/` | 1 | dialog.vue |
| Date-picker | `date-picker/` | 6 | base.vue, custom-cell.vue, custom-icon.vue, date-presets-alt.vue |
| Descriptions | `descriptions/` | 2 | base.vue, custom-style.vue |
| Dialog | `dialog/` | 5 | async.vue, base.vue, custom.vue, multiple.vue |
| Divider | `divider/` | 1 | base.vue |
| Drawer | `drawer/` | 4 | base.vue, custom.vue, plugin.vue, popup.vue |
| Dropdown | `dropdown/` | 6 | base.vue, custom.vue, disabled.vue, event.vue |
| Empty | `empty/` | 1 | base.vue |
| Form | `form/` | 10 | base.vue, basic-form.vue, clear-validate.vue, custom-validator.vue |
| Grid | `grid/` | 1 | base.vue |
| Guide | `guide/` | 7 | base.vue, custom-highlight-content.vue, custom-popup.vue, dialog-body.vue |
| Icon | `icon/` | 1 | base.vue |
| Image | `image/` | 1 | avif.vue |
| Image-viewer | `image-viewer/` | 2 | base.vue, multiple.vue |
| Input | `input/` | 3 | base.vue, format.vue, group.vue |
| Input-adornment | `input-adornment/` | 1 | select.vue |
| Input-number | `input-number/` | 2 | disabled.vue, format.vue |
| Layout | `layout/` | 1 | base.vue |
| Link | `link/` | 2 | base.vue, disabled.vue |
| List | `list/` | 3 | base.vue, loading.vue, virtual-scroll.vue |
| Loading | `loading/` | 3 | base.vue, indicatorSlot.vue, preventScrollThrough.vue |
| Menu | `menu/` | 5 | custom-header.vue, custom-side.vue, group-side.vue, multiple.vue |
| Message | `message/` | 3 | base.vue, loading.vue, plugin.vue |
| Notification | `notification/` | 2 | base.vue, plugin.vue |
| Pages | `pages/` | 2 | form-page.vue, landing-list-page.vue |
| Pagination | `pagination/` | 1 | base.vue |
| Popconfirm | `popconfirm/` | 1 | base.vue |
| Popup | `popup/` | 2 | base.vue, disabled.vue |
| Progress | `progress/` | 1 | circle.vue |
| Qrcode | `qrcode/` | 4 | base.vue, customColor.vue, customSize.vue, customStatusRender.vue |
| Radio | `radio/` | 2 | base.vue, group.vue |
| Range-input | `range-input/` | 2 | base.vue, popup.vue |
| Rate | `rate/` | 2 | base.vue, custom.vue |
| Select | `select/` | 9 | base.vue, custom-options.vue, custom-selected.vue, disabled.vue |
| Select-input | `select-input/` | 3 | autowidth-multiple.vue, custom-tag.vue, multiple.vue |
| Skeleton | `skeleton/` | 1 | base.vue |
| Slider | `slider/` | 2 | base.vue, disabled.vue |
| Space | `space/` | 1 | base.vue |
| Statistic | `statistic/` | 3 | base.vue, loading.vue, slot.vue |
| Steps | `steps/` | 1 | extra.vue |
| Sticky-tool | `sticky-tool/` | 1 | base.vue |
| Swiper | `swiper/` | 1 | base.vue |
| Switch | `switch/` | 1 | base.vue |
| Table | `table/` | 14 | async-loading.vue, base.vue, custom-cell.vue, custom-col-button.vue |
| Tabs | `tabs/` | 2 | base.vue, custom.vue |
| Tag | `tag/` | 4 | base.vue, check-tag-group.vue, custom-color.vue, disabled.vue |
| Tag-input | `tag-input/` | 2 | base.vue, custom-tag.vue |
| Textarea | `textarea/` | 2 | base.vue, events.vue |
| Time-picker | `time-picker/` | 5 | base.vue, disabled.vue, format.vue, panel.vue |
| Timeline | `timeline/` | 4 | base.vue, customContent.vue, customDot.vue, loading.vue |
| Tooltip | `tooltip/` | 2 | base.vue, with-popup-or-popconfirm.vue |
| Transfer | `transfer/` | 4 | base.vue, custom-render.vue, custom.vue, disabled.vue |
| Tree | `tree/` | 4 | base.vue, controlled.vue, debug-performance.vue, disabled.vue |
| Tree-select | `tree-select/` | 2 | base.vue, multiple.vue |
| Typography | `typography/` | 1 | base.vue |
| Upload | `upload/` | 3 | base.vue, custom-drag.vue, single-custom.vue |
| Watermark | `watermark/` | 1 | base.vue |

> 此 README 由 `scripts/slim-examples.mjs` 自动生成。
> 示例已按方案一精简：Web/Mobile 保留 base + 关键变体，Miniprogram/UniApp 仅保留 base 子目录。
