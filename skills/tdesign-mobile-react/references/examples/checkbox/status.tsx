/**
 * TDesign TDesign Mobile React 示例：checkbox - status
 * 覆盖组件：Checkbox
 * 来源：组件库源码 src/checkbox/_example/status.tsx
 */

import React from 'react';
import { Checkbox } from 'tdesign-mobile-react';

export default function () {
  return (
    <Checkbox.Group className="box" defaultValue={['checkbox1']} disabled>
      <Checkbox label="选项禁用-已选" value="checkbox1" />
      <Checkbox label="选项禁用-默认" value="checkbox2" />
    </Checkbox.Group>
  );
}
