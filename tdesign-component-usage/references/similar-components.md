# TDesign 相似组件选型

当多个 TDesign 组件都可能满足用户需求时，使用本文判断取舍。

## Button、Link、Menu、Dropdown

- `Button`：用于启动操作或业务命令。
- `Link`：用于跳转到页面、区域或资源。
- `Menu`：用于组织导航项或较大规模的命令集合，通常持续可见。
- `Dropdown`：用于将上下文相关操作收纳在触发器后面，节省空间。

判断规则：按点击结果选择。修改数据或启动任务用 `Button`；页面跳转用 `Link`；暴露多个上下文命令用 `Dropdown`；构成导航结构用 `Menu`。

## Dialog、Popconfirm、Drawer、Popup

- `Dialog`：用于需要聚焦处理的信息、确认或表单内容，会局部中断当前流程。
- `Popconfirm`：用于触发点附近的轻量二次确认，适合低到中等风险操作。
- `Drawer`：用于需要较大空间且希望保留页面上下文的侧边任务面板。
- `Popup`：底层浮层能力，用于高阶组件不能满足的自定义浮层。

判断规则：按中断强度和内容体量选择。小型确认用 `Popconfirm`；聚焦阻断决策用 `Dialog`；扩展型上下文任务用 `Drawer`；标准组件不适用时才使用 `Popup`。

## Message、Notification、Alert

- `Message`：操作后的短暂全局反馈。
- `Notification`：内容更丰富、停留更久的全局通知。
- `Alert`：页面内或区块内持续展示的上下文提示。

判断规则：按持久性和上下文选择。快速反馈用 `Message`；较完整的全局通知用 `Notification`；属于特定页面区块的信息用 `Alert`。

## Table、List、Descriptions、Card

- `Table`：结构化行列数据、横向比较、排序、筛选、分页、批量操作。
- `List`：结构相似的重复条目，横向字段对比不是重点。
- `Descriptions`：只读字段和值的信息展示。
- `Card`：将相关内容和操作组织为模块化区块。

判断规则：按信息结构选择。结构化数据集用 `Table`；条目流用 `List`；详情事实用 `Descriptions`；内容分组用 `Card`。

## Form、Descriptions、输入类组件

- `Form`：用于收集、校验并提交一组信息。
- `Descriptions`：用于展示只读信息。
- `Input`、`Select`、`Checkbox` 等字段组件：用于收集单个值，通常放在 `Form` 中。

判断规则：如果数据需要作为一组提交或校验，使用 `Form`；如果只是阅读信息，使用 `Descriptions`。

## Select、Dropdown、Cascader、TreeSelect、Tree

- `Select`：在有限空间中从扁平选项里选择一个或多个值。
- `Dropdown`：展示操作菜单，而不是选择值。
- `Cascader`：按路径逐级选择层级数据。
- `TreeSelect`：在紧凑控件中选择树形数据。
- `Tree`：直接浏览和操作完整层级结构。

判断规则：按数据形态和任务选择。扁平选项用 `Select`；路径式层级选择用 `Cascader`；紧凑树选择用 `TreeSelect`；完整层级浏览与操作用 `Tree`；动作收纳用 `Dropdown`。

## Checkbox、Radio、Switch

- `Checkbox`：多选或延迟提交的独立布尔值。
- `Radio`：从少量可见选项中单选一个。
- `Switch`：即时生效的开关状态。

判断规则：单选用 `Radio`；多选或表单内布尔值用 `Checkbox`；即时状态切换用 `Switch`。

## Input、Textarea、Search、InputNumber

- `Input`：短文本自由输入。
- `Textarea`：多行自由文本输入。
- `Search`：以搜索为核心任务的文本输入。
- `InputNumber`：数字输入。

判断规则：按值类型和任务选择。存在更语义化组件时，不使用泛化的 `Input` 替代。

## Loading、Skeleton、Progress

- `Loading`：通用等待或加载状态。
- `Skeleton`：内容结构已知但数据未返回时的占位。
- `Progress`：可量化的完成进度。

判断规则：布局已知且内容待加载用 `Skeleton`；通用等待用 `Loading`；需要显示完成百分比用 `Progress`。
