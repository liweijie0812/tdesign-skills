/**
 * TDesign TDesign React 示例：statistic - loading
 * 覆盖组件：Statistic
 * 来源：组件库源码 packages/components/statistic/_example/loading.tsx
 */

import React from 'react';
import { Space, Statistic, Switch } from 'tdesign-react';

const LoadingStatistic = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <Space direction="vertical">
      <Switch value={loading} onChange={(value) => setLoading(value)} size="large" />
      <Statistic title="Downloads" value={123456} loading={loading} />
    </Space>
  );
};

export default LoadingStatistic;
