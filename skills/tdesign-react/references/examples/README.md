# TDesign React 示例索引

本目录包含从 TDesign React 组件库源码自动提取的示例代码（已精简，每组件仅保留基础示例和关键变体）。

导入方式：`import { Component } from 'tdesign-react'`

## 覆盖组件

| 组件 | 目录 | 保留示例数 | 关键示例 |
|------|------|------------|----------|
| Affix | `affix/` | 1 | base.tsx |
| Alert | `alert/` | 1 | base.tsx |
| Anchor | `anchor/` | 3 | base.tsx, customize-highlight.tsx, multiple.tsx |
| Auto-complete | `auto-complete/` | 1 | base.tsx |
| Avatar | `avatar/` | 4 | base.tsx, group-cascading.tsx, group-max.tsx, group.tsx |
| Back-top | `back-top/` | 3 | baseList.tsx, baseListSmall.tsx, custom.tsx |
| Badge | `badge/` | 2 | base.tsx, custom.tsx |
| Breadcrumb | `breadcrumb/` | 3 | base.tsx, custom-ellipsis.tsx, custom.tsx |
| Button | `button/` | 2 | base.tsx, custom-element.tsx |
| Calendar | `calendar/` | 4 | base.tsx, controller-config.tsx, events.tsx, slot-props-api.tsx |
| Card | `card/` | 2 | base.tsx, custom-loading-props.tsx |
| Cascader | `cascader/` | 5 | base.tsx, custom-options.tsx, disabled.tsx, multiple.tsx |
| Checkbox | `checkbox/` | 3 | base.tsx, controlled.tsx, group.tsx |
| Collapse | `collapse/` | 2 | base.tsx, rightSlot.tsx |
| Color-picker | `color-picker/` | 1 | panel.tsx |
| Comment | `comment/` | 2 | base.tsx, reply-form.tsx |
| Config-provider | `config-provider/` | 1 | dialog.tsx |
| Date-picker | `date-picker/` | 6 | base.tsx, custom-cell.tsx, custom-icon.tsx, date-presets-alt.tsx |
| Descriptions | `descriptions/` | 2 | base.tsx, custom-style.tsx |
| Dialog | `dialog/` | 4 | async.tsx, base.tsx, custom.tsx, plugin.tsx |
| Divider | `divider/` | 1 | base.tsx |
| Drawer | `drawer/` | 4 | base.tsx, custom.tsx, plugin.tsx, popup.tsx |
| Dropdown | `dropdown/` | 4 | base.tsx, custom.tsx, disabled.tsx, multiple.tsx |
| Empty | `empty/` | 1 | base.tsx |
| Form | `form/` | 13 | base.tsx, basic-form.tsx, clear-validate.tsx, custom-validator.tsx |
| Grid | `grid/` | 1 | base.tsx |
| Guide | `guide/` | 4 | base.tsx, custom-popup.tsx, dialog.tsx, popup-dialog.tsx |
| Icon | `icon/` | 1 | Enhanced.tsx |
| Image | `image/` | 1 | avif.tsx |
| Image-viewer | `image-viewer/` | 2 | base.tsx, multiple.tsx |
| Input | `input/` | 4 | base.tsx, disabled.tsx, format.tsx, group.tsx |
| Input-adornment | `input-adornment/` | 1 | select.tsx |
| Input-number | `input-number/` | 1 | format.tsx |
| Layout | `layout/` | 1 | base.tsx |
| Link | `link/` | 2 | base.tsx, disabled.tsx |
| List | `list/` | 3 | asyncLoading.tsx, base.tsx, virtual-scroll.tsx |
| Loading | `loading/` | 1 | base.tsx |
| Menu | `menu/` | 5 | custom-header.tsx, custom-side.tsx, group-side.tsx, multiple.tsx |
| Message | `message/` | 2 | base.tsx, loading.tsx |
| Notification | `notification/` | 2 | base.tsx, plugin.tsx |
| Pagination | `pagination/` | 1 | base.tsx |
| Popconfirm | `popconfirm/` | 1 | base.tsx |
| Popup | `popup/` | 3 | base.tsx, disabled.tsx, plugin.tsx |
| Progress | `progress/` | 1 | circle.tsx |
| Qrcode | `qrcode/` | 4 | base.tsx, customColor.tsx, customSize.tsx, customStatusRender.tsx |
| Radio | `radio/` | 2 | base.tsx, group.tsx |
| Range-input | `range-input/` | 2 | base.tsx, popup.tsx |
| Rate | `rate/` | 2 | base.tsx, custom.tsx |
| Select | `select/` | 9 | base.tsx, custom-options.tsx, custom-selected.tsx, disabled.tsx |
| Select-input | `select-input/` | 3 | autowidth-multiple.tsx, custom-tag.tsx, multiple.tsx |
| Skeleton | `skeleton/` | 1 | base.tsx |
| Slider | `slider/` | 2 | base.tsx, disabled.tsx |
| Space | `space/` | 1 | base.tsx |
| Statistic | `statistic/` | 3 | base.tsx, loading.tsx, slot.tsx |
| Steps | `steps/` | 1 | extra.tsx |
| Sticky-tool | `sticky-tool/` | 1 | base.tsx |
| Swiper | `swiper/` | 1 | base.tsx |
| Switch | `switch/` | 1 | base.tsx |
| Table | `table/` | 14 | async-loading.tsx, base.tsx, custom-cell.tsx, custom-col-button.tsx |
| Tabs | `tabs/` | 2 | base.tsx, custom.tsx |
| Tag | `tag/` | 3 | base.tsx, check-tag-group.tsx, custom-color.tsx |
| Tag-input | `tag-input/` | 2 | base.tsx, custom-tag.tsx |
| Textarea | `textarea/` | 2 | base.tsx, events.tsx |
| Time-picker | `time-picker/` | 3 | disabled.tsx, panel.tsx, presets.tsx |
| Timeline | `timeline/` | 4 | base.tsx, customContent.tsx, customDot.tsx, loading.tsx |
| Tooltip | `tooltip/` | 1 | base.tsx |
| Transfer | `transfer/` | 3 | base.tsx, custom-render.tsx, custom.tsx |
| Tree | `tree/` | 3 | base.tsx, controlled.tsx, disabled.tsx |
| Tree-select | `tree-select/` | 3 | base.tsx, multiple.tsx, panelContent.tsx |
| Typography | `typography/` | 1 | base.tsx |
| Upload | `upload/` | 3 | base.tsx, custom-drag.tsx, single-custom.tsx |
| Watermark | `watermark/` | 1 | base.tsx |

> 此 README 由 `scripts/slim-examples.mjs` 自动生成。
> 示例已按方案一精简：Web/Mobile 保留 base + 关键变体，Miniprogram/UniApp 仅保留 base 子目录。
