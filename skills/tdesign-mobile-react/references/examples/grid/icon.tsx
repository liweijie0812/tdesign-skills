/**
 * TDesign TDesign Mobile React 示例：grid - icon
 * 覆盖组件：Grid
 * 来源：组件库源码 src/grid/_example/icon.tsx
 */

import React from 'react';
import { Grid, GridItem } from 'tdesign-mobile-react';
import { ShareIcon, StarIcon, DownloadIcon, EditIcon } from 'tdesign-icons-react';

import './style/index.less';

export default function () {
  return (
    <>
      <Grid column={4} className={'grid-demo'}>
        <GridItem text="分享" image={<ShareIcon size={24} />} />
        <GridItem text="收藏0" image={<StarIcon size={24} />} />
        <GridItem text="保存" image={<DownloadIcon size={24} />} />
        <GridItem text="编辑" image={<EditIcon size={24} />} />
      </Grid>
    </>
  );
}
