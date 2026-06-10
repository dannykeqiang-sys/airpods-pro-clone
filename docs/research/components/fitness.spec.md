# Fitness Section 规格文档

## 概述
"健身"区域，展示心率传感功能和 IP57 防护等级。

## 布局结构
- Eyebrow: H2 "健身" (typography-eyebrow-elevated)
- Headline: H3 "心率传感功能，贴心上线。" (typography-headline-standalone)
- Hero: 产品图动画 (965x965, fitness_hero_startframe → fitness_hero_endframe)
- 健身 App 描述
- Callout: H3 "IP57 级别防尘、抗汗、抗水。" + icon_water_resistance

## 内容数据
- "全新心率传感功能可在你锻炼时..." ³
- "健身 App。只需 AirPods Pro 3 和 iPhone 搭配..."
- "AirPods Pro 3 是首款达到 IP57 级别..." ⁶

## 样式
- 背景: linear-gradient(#f5f5f7 → #e1e1e3)
- 产品图居中，带心率脉冲动画
- IP57 callout 在右侧

## 交互行为
- 滚动触发心率脉冲动画 (光脉冲效果)
- staggered-start 动画

## 图片资源
- /images/fitness/fitness_hero_startframe.png
- /images/fitness/fitness_hero_endframe.png
- /images/fitness/icon_water_resistance.png
- /images/fitness/fitness_workout_buddy_lifestyle.png