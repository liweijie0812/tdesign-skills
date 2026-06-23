<!--
  TDesign TDesign UniApp 示例：action-sheet - index
  覆盖组件：Action-sheet
  来源：组件库源码 packages/components/action-sheet/_example/index.vue
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
        items: ['Move', 'Mark as important', 'Unsubscribe', 'Add to Tasks'],
      });
    },
    showDescAction() {
      ActionSheet.show({
        theme: ActionSheetTheme.List,
        selector: '#t-action-sheet',
        context: this,
        cancelText: 'cancel',
        description: 'Email Settings',
        items: ['Move', 'Mark as important', 'Unsubscribe', 'Add to Tasks'],
      });
    },
    showIconAction() {
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
          },
          {
            label: 'Unsubscribe',
            icon: 'pin',
          },
          {
            label: 'Add to Tasks',
            icon: 'cloud-upload',
          },
        ],
      });
    },
    handleSelected(e) {
      console.log(e.detail);
    },
  },
});
