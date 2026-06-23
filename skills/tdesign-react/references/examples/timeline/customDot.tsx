/**
 * TDesign TDesign React 示例：timeline - customDot
 * 覆盖组件：Timeline
 * 来源：组件库源码 packages/components/timeline/_example/customDot.tsx
 */

import React, { useState } from 'react';
import { HeartIcon, HomeIcon, TipsIcon, UserIcon } from 'tdesign-icons-react';
import { Radio, Space, Timeline } from 'tdesign-react';

const color = 'var(--td-brand-color)';

export default function CustomDotTimeLine() {
  const [dot, setDot] = useState<'default' | 'dot'>('default');

  return (
    <Space direction="vertical">
      <Space>
        <h4>时间轴样式</h4>
        <Radio.Group variant="default-filled" value={dot} onChange={(v) => setDot(v as any)}>
          <Radio.Button value="default">默认样式</Radio.Button>
          <Radio.Button value="dot">Dot样式</Radio.Button>
        </Radio.Group>
      </Space>
      <Timeline mode="same" theme={dot}>
        <Timeline.Item label="2022-01-01" dot={<TipsIcon size="medium" color={color} />}>
          事件一
        </Timeline.Item>
        <Timeline.Item label="2022-02-01" dot={<UserIcon size="medium" color={color} />}>
          事件二
        </Timeline.Item>
        <Timeline.Item label="2022-03-01" dot={<HeartIcon size="medium" color={color} />}>
          事件三
        </Timeline.Item>
        <Timeline.Item label="2022-04-01" dot={<HomeIcon size="medium" color={color} />}>
          事件四
        </Timeline.Item>
      </Timeline>
    </Space>
  );
}
