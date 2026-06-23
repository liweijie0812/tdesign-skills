/**
 * TDesign TDesign React 示例：statistic - trend
 * 覆盖组件：Statistic
 * 来源：组件库源码 packages/components/statistic/_example/trend.tsx
 */

import React from 'react';
import { Space, Statistic } from 'tdesign-react';

const TrendStatistic = () => (
  <Space size={100}>
    <Statistic title="Total Assets" value={82.76} unit="%" trend="increase" />
    <Statistic title="Total Assets" value={82.76} unit="%" trend="decrease" />
    <Statistic title="Total Assets" value={82.76} unit="%" trend="decrease" trendPlacement="right" />
  </Space>
);

export default TrendStatistic;
