/**
 * TDesign TDesign Mobile React 示例：grid - base
 * 覆盖组件：Grid
 * 来源：组件库源码 src/grid/_example/base.tsx
 */

import React from 'react';
import { Grid, GridItem } from 'tdesign-mobile-react';

import './style/index.less';

const imgUrl = 'https://tdesign.gtimg.com/mobile/demos/example1.png';

export default function Base() {
  return (
    <>
      <Grid column={5} className={'grid-demo'}>
        <GridItem text="标题文字" image={imgUrl} />
        <GridItem text="标题文字" image={imgUrl} />
        <GridItem text="标题文字" image={imgUrl} />
        <GridItem text="标题文字" image={imgUrl} />
        <GridItem text="最多四个字" image={imgUrl} />
      </Grid>
      <Grid className={'grid-demo'}>
        <GridItem text="标题文字" image={imgUrl} />
        <GridItem text="标题文字" image={imgUrl} />
        <GridItem text="标题文字" image={imgUrl} />
        <GridItem text="最多五个字" image={imgUrl} />
      </Grid>
      <Grid column={3} className={'grid-demo'}>
        <GridItem text="标题文字" image={imgUrl} />
        <GridItem text="标题文字" image={imgUrl} />
        <GridItem text="最多六个文字" image={imgUrl} />
      </Grid>
    </>
  );
}
