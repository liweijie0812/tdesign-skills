/**
 * TDesign TDesign React 示例：steps - no-sequence
 * 覆盖组件：Steps
 * 来源：组件库源码 packages/components/steps/_example/no-sequence.tsx
 */

import React from 'react';
import { Steps } from 'tdesign-react';

const { StepItem } = Steps;

export default function HorizontalStepsWithNumbers() {
  return (
    <Steps theme="dot" defaultCurrent={1}>
      <StepItem title="已完成的步骤" content="这里是提示文字" />
      <StepItem title="进行中的步骤" content="这里是提示文字" />
      <StepItem title="未进行的步骤" content="这里是提示文字" />
      <StepItem title="未进行的步骤" content="这里是提示文字" />
    </Steps>
  );
}
