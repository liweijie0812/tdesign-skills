/**
 * TDesign TDesign React 示例：steps - vertical-no-sequence
 * 覆盖组件：Steps
 * 来源：组件库源码 packages/components/steps/_example/vertical-no-sequence.tsx
 */

import React from 'react';
import { Steps } from 'tdesign-react';

const { StepItem } = Steps;

export default function HorizontalStepsWithNumbers() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Steps layout="vertical" theme="dot" defaultCurrent={1}>
        <StepItem title="已完成的步骤" content="这里是提示文字" />
        <StepItem title="进行中的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
      </Steps>
      <Steps layout="vertical" sequence="reverse" theme="dot" defaultCurrent={1}>
        <StepItem title="已完成的步骤" content="这里是提示文字" />
        <StepItem title="已完成的步骤" content="这里是提示文字" />
        <StepItem title="进行中的步骤" content="这里是提示文字" />
        <StepItem title="未进行的步骤" content="这里是提示文字" />
      </Steps>
    </div>
  );
}
