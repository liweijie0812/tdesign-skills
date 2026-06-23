/**
 * TDesign TDesign React 示例：table - empty
 * 覆盖组件：Table
 * 来源：组件库源码 packages/components/table/_example/empty.tsx
 */

import React from 'react';
import { Table } from 'tdesign-react';

import type { TableProps } from 'tdesign-react';

export default function EmptyTable() {
  const TableData: TableProps['data'] = [];
  return (
    <>
      <Table
        data={TableData}
        columns={[
          {
            colKey: 'project',
            title: '项目名称',
            width: '150px',
            cell: ({ row }) => row.projectName,
          },
          {
            colKey: 'member',
            title: '管理员',
            width: '300px',
            cell: ({ row }) => row.manager.join(','),
          },
          {
            colKey: 'company',
            title: '所属公司',
            width: '150px',
            cell: ({ row }) => row.company,
          },
        ]}
        rowKey="projectName"
      />
      <Table
        data={TableData}
        empty={
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100 }}>
            😄 it is empty. 😁
          </span>
        }
        columns={[
          {
            colKey: 'project',
            title: '项目名称',
            width: '150px',
            cell: ({ row }) => row.projectName,
          },
          {
            colKey: 'member',
            title: '管理员',
            width: '300px',
            cell: ({ row }) => row.manager.join(','),
          },
          {
            colKey: 'company',
            title: '所属公司',
            width: '150px',
            cell: ({ row }) => row.company,
          },
        ]}
        rowKey="projectName"
      />
    </>
  );
}
