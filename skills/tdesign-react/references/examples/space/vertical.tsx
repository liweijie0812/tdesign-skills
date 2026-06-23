/**
 * TDesign TDesign React 示例：space - vertical
 * 覆盖组件：Space
 * 来源：组件库源码 packages/components/space/_example/vertical.tsx
 */

import React from 'react';
import { Card, Space } from 'tdesign-react';

const BaseSpace = () => (
  <Space direction="vertical">
    <Card title="标题" actions="操作" header bordered hoverShadow>
      仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
    </Card>
    <Card title="标题" actions="操作" header bordered hoverShadow>
      仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
    </Card>
    <Card title="标题" actions="操作" header bordered hoverShadow>
      仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。
    </Card>
  </Space>
);

export default BaseSpace;
