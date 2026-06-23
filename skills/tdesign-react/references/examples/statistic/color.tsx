/**
 * TDesign TDesign React 示例：statistic - color
 * 覆盖组件：Statistic
 * 来源：组件库源码 packages/components/statistic/_example/color.tsx
 */

import React from 'react';
import { Space, Statistic } from 'tdesign-react';

const ColorStatistic = () => (
  <Space>
    <Statistic title="Total Assets" value={82.76} unit="%" trend="increase" color="black" />
    <Statistic title="Total Assets" value={82.76} unit="%" trend="increase" color="blue" />
    <Statistic title="Total Assets" value={82.76} unit="%" trend="increase" color="red" />
    <Statistic title="Total Assets" value={82.76} unit="%" trend="increase" color="orange" />
    <Statistic title="Total Assets" value={82.76} unit="%" trend="increase" color="green" />
  </Space>
);

export default ColorStatistic;
