/**
 * TDesign TDesign Mobile React 示例：back-top - base
 * 覆盖组件：Back-top
 * 来源：组件库源码 src/back-top/_example/base.tsx
 */

import React, { useState, useCallback } from 'react';
import { BackTop, Button } from 'tdesign-mobile-react';
import './style/index.less';

export default function Base({ visible, onClose, container }) {
  const [theme, setTheme] = useState<{ theme: 'round' | 'half-round'; text: string }>({
    theme: 'round',
    text: '顶部',
  });

  // 切换主题
  const onClick = useCallback(
    (theme, text) => {
      setTheme({
        theme,
        text,
      });
      onClose();
      const containerElement = container();
      containerElement.scrollTop = 1200;
    },
    [onClose, container],
  );

  function handleToTop() {
    console.log('handleToTop');
  }

  return (
    <>
      {visible ? <BackTop text={theme.text} theme={theme.theme} onToTop={handleToTop} container={container} /> : null}
      <div className="button-group">
        <div className="tdesign-mobile-demo-block__summary">圆形返回顶部</div>

        <Button
          className="button"
          block
          size="large"
          variant="outline"
          theme="primary"
          onClick={() => onClick('round', '顶部')}
        >
          圆形返回顶部
        </Button>

        <div className="tdesign-mobile-demo-block__summary">半圆形返回顶部</div>
        <Button
          className="button"
          block
          size="large"
          variant="outline"
          theme="primary"
          onClick={() => onClick('half-round', '返回顶部')}
        >
          半圆形返回顶部
        </Button>
      </div>
    </>
  );
}
