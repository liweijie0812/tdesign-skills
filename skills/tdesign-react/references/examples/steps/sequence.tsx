/**
 * TDesign TDesign React 示例：steps - sequence
 * 覆盖组件：Steps
 * 来源：组件库源码 packages/components/steps/_example/sequence.tsx
 */

import React from 'react';
import { Space, Steps } from 'tdesign-react';

const { StepItem } = Steps;

export default function HorizontalStepsWithNumbers() {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Steps defaultCurrent={1}>
        <StepItem title="已完成的步骤" content="这里是提示文字" />
        <StepItem title="进行中的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
      </Steps>
      <Steps defaultCurrent={2}>
        <StepItem title="已完成的步骤" content="这里是提示文字" />
        <StepItem title="已完成的步骤" content="这里是提示文字" />
        <StepItem title="进行中的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
      </Steps>
    </Space>
  );
}
