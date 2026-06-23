/**
 * TDesign TDesign Mobile React 示例：config-provider - table-en
 * 覆盖组件：Config-provider
 * 来源：组件库源码 src/config-provider/_example/table-en.tsx
 */

import React from 'react';
import { ConfigProvider, Table } from 'tdesign-mobile-react';
import { merge } from 'lodash-es';
import enConfig from 'tdesign-mobile-react/es/locale/en_US';

export default function TableEn() {
  // 全局特性配置，可以引入英文默认配置 enConfig，还可以在默认配置的基础上进行自定义配置
  const globalConfig = merge(enConfig, {});

  const columns = [
    {
      colKey: 'type',
      title: 'Type',
      sorter: true,
    },
    {
      colKey: 'platform',
      title: 'Platform',
    },
    {
      colKey: 'property',
      title: 'Property',
      sorter: true,
      filter: {
        type: 'single',
      },
    },
  ];

  return (
    <ConfigProvider globalConfig={globalConfig}>
      <Table columns={columns} data={[]} bordered={true} rowKey="property"></Table>
    </ConfigProvider>
  );
}
