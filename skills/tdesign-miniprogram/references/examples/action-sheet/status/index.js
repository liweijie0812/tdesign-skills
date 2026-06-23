<!--
  TDesign TDesign Miniprogram 示例：action-sheet - index
  覆盖组件：Action-sheet
  来源：组件库源码 packages/components/action-sheet/_example/index.wxml
-->

import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet';

Component({
  methods: {
    handleAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        cancelText: 'cancel',
        items: [
          {
            label: 'Move',
            icon: 'enter',
          },
          {
            label: 'Mark as important',
            icon: 'bookmark',
            color: '#0052D9',
          },
          {
            label: 'Unsubscribe',
            icon: 'pin',
            color: '#E34D59',
          },
          {
            label: 'Add to Tasks',
            icon: 'cloud-upload',
            disabled: true,
          },
        ],
      });
    },
    handleSelected(e) {
      console.log(e.detail);
    },
  },
});
