/**
 * TDesign TDesign Mobile React 示例：checkbox - right
 * 覆盖组件：Checkbox
 * 来源：组件库源码 src/checkbox/_example/right.tsx
 */

import React from 'react';
import { Checkbox } from 'tdesign-mobile-react';

export default function () {
  return (
    <>
      <Checkbox label="多选" value="checkbox1" />
      <Checkbox label="多选" placement="right" value="checkbox2" defaultChecked />
    </>
  );
}
