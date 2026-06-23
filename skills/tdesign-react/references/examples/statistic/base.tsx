/**
 * TDesign TDesign React 示例：statistic - base
 * 覆盖组件：Statistic
 * 来源：组件库源码 packages/components/statistic/_example/base.tsx
 */

import React from 'react';
import { Space, Statistic } from 'tdesign-react';

const BaseStatistic = () => (
  <Space size={100}>
    <Statistic title="Total Assets" value={82.76} unit="%" trend="increase" />
    <Statistic title="Total Assets" value={82.76} unit="USD" trend="increase" />
  </Space>
);

export default BaseStatistic;
