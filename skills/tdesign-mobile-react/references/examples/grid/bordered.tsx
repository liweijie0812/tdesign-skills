/**
 * TDesign TDesign Mobile React 示例：grid - bordered
 * 覆盖组件：Grid
 * 来源：组件库源码 src/grid/_example/bordered.tsx
 */

import React from 'react';
import { Grid, GridItem } from 'tdesign-mobile-react';

import './style/index.less';

const imgUrl = 'https://tdesign.gtimg.com/mobile/demos/example1.png';

export default function Bordered() {
  return (
    <>
      <Grid column={3} border className={'grid-demo'}>
        <GridItem text="标题文字" image={imgUrl} description="描述文字" />
        <GridItem text="标题文字" image={imgUrl} description="描述文字" />
        <GridItem text="最多六个文字" image={imgUrl} description="描述最多六字" />
        <GridItem text="标题文字" image={imgUrl} description="描述文字" />
        <GridItem text="标题文字" image={imgUrl} description="描述文字" />
        <GridItem text="最多六个文字" image={imgUrl} description="描述最多六字" />
      </Grid>
      <Grid column={2} border className={'grid-demo'}>
        <GridItem text="标题文字" image={imgUrl} description="描述文字" />
        <GridItem text="标题文字" image={imgUrl} description="描述文字" />
      </Grid>
    </>
  );
}
