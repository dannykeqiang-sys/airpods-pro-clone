# Audio Performance Section 规格文档

## 概述
"音频性能"区域，展示 H2 芯片驱动的声学架构，含产品透视动画。

## 布局结构
- Eyebrow: H2 "音频性能" (typography-eyebrow-elevated)
- Headline: H3 "好声音，由科技领衔。" (typography-headline-standalone)
- Hero: 产品图动画 (design_startframe → design_endframe → audio_airpods_pro_guts)
- 3 个描述段落

## 内容数据
- "AirPods Pro 3 由 Apple 设计的 H2 芯片强势驱动..."
- "新的多孔声学架构可以更精准地控制气流..."
- "定制的驱动单元和放大器配合 H2 芯片..."

## 样式
- 背景: #f5f5f7 (background-alt)
- 产品图居中展示，带透视动画
- 文字在图片下方居中

## 交互行为
- 滚动触发产品透视动画 (外部 → 内部构造)
- staggered-start 动画

## 图片资源
- /images/audioPerformance/design_startframe.png
- /images/audioPerformance/design_endframe.png
- /images/audioPerformance/audio_airpods_pro_guts.png