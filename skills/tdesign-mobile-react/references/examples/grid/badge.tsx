/**
 * TDesign TDesign Mobile React 示例：grid - badge
 * 覆盖组件：Grid
 * 来源：组件库源码 src/grid/_example/badge.tsx
 */

import React from 'react';
import { Grid, GridItem } from 'tdesign-mobile-react';

import './style/index.less';

const imgUrl = 'https://tdesign.gtimg.com/mobile/demos/example1.png';

export default function Badge() {
  return (
    <>
      <Grid className={'grid-demo'}>
        <GridItem text="标题文字" image={imgUrl} badge={{ dot: true }} />
        <GridItem text="标题文字" image={imgUrl} badge={{ count: 8 }} />
        <GridItem text="标题五字内" image={imgUrl} badge={{ count: 13 }} />
        <GridItem text="标题五字内" image={imgUrl} badge={{ count: 'NEW' }} />
      </Grid>
    </>
  );
}
