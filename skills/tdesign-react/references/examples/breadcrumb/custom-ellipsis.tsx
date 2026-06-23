/**
 * TDesign TDesign React 示例：breadcrumb - custom-ellipsis
 * 覆盖组件：Breadcrumb
 * 来源：组件库源码 packages/components/breadcrumb/_example/custom-ellipsis.tsx
 */

import React from 'react';
import { EllipsisIcon } from 'tdesign-icons-react';
import { Breadcrumb, Button, Dropdown } from 'tdesign-react';

const { BreadcrumbItem } = Breadcrumb;

const options = [
  { content: '页面1' },
  { content: '页面2' },
  { content: '页面3' },
  { content: '页面4' },
  { content: '页面5' },
];

export default function BreadcrumbExample() {
  return (
    <>
      <Breadcrumb
        maxItems={4}
        itemsBeforeCollapse={2}
        itemsAfterCollapse={1}
        ellipsis={(props) => (
          <Dropdown>
            <Button icon={<EllipsisIcon />} shape="square" variant="text" />
            <Dropdown.DropdownMenu>
              {props.items.map((item) => (
                <Dropdown.DropdownItem key={String(item.content)}>{item.content}</Dropdown.DropdownItem>
              ))}
            </Dropdown.DropdownMenu>
          </Dropdown>
        )}
      >
        {options.map((option) => (
          <BreadcrumbItem key={option.content} content={option.content} />
        ))}
      </Breadcrumb>

      <Breadcrumb
        maxItems={4}
        itemsBeforeCollapse={2}
        itemsAfterCollapse={1}
        options={options}
        ellipsis={(props) => (
          <Dropdown>
            <Button icon={<EllipsisIcon />} shape="square" variant="text" />
            <Dropdown.DropdownMenu>
              {props.items.map((item) => (
                <Dropdown.DropdownItem key={String(item.content)}>{item.content}</Dropdown.DropdownItem>
              ))}
            </Dropdown.DropdownMenu>
          </Dropdown>
        )}
      />
    </>
  );
}
