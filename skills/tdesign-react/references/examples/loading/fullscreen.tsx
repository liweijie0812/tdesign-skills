/**
 * TDesign TDesign React 示例：loading - fullscreen
 * 覆盖组件：Loading
 * 来源：组件库源码 packages/components/loading/_example/fullscreen.tsx
 */

import React, { useState } from 'react';
import { Loading, Switch } from 'tdesign-react';

export default function LoadingFullscreen() {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (value) => {
    setChecked(value);
    setLoading(value);

    if (value)
      setTimeout(() => {
        setChecked(false);
        setLoading(false);
      }, 2000);
  };
  return (
    <>
      <Loading loading={loading} fullscreen preventScrollThrough={true} text="加载中"></Loading>
      Loading state:
      <Switch value={checked} onChange={onChange} />
    </>
  );
}
