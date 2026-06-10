# Highlights Section 规格文档

## 概述
"先刷重点"区域，展示 4 个核心亮点卡片，带 dotnav 导航和视频 CTA。

## 布局结构
- Section header: H2 "先刷重点" (typography-section-header-headline)
- CTA: "观看影片" 链接 + 播放图标
- 4 个 media-card-gallery 卡片，dotnav 导航切换
- 每个卡片: 大图 (1260x680) + caption headline + footnote

## 内容数据
1. "打造高清音质，奏响 3D 音效，营造非同凡响的空间听觉体验²" - highlights_noise_cancellation
2. "全新心率传感功能，跟测锻炼时的心率和卡路里³" - highlights_heart_rate
3. "从内到外设计一新，入耳更稳更贴合，声学表现更出色⁴" - highlights_acoustic
4. "启用主动降噪时，充满一次电，就能最多畅听 8 小时⁵" - highlights_battery

## 样式
- 背景: 透明 (继承父级)
- Section header 居中
- 卡片全宽展示，带 dotnav 圆点导航
- 图片尺寸: 1260x680

## 交互行为
- Dotnav 点击切换卡片
- 滚动触发 staggered-start 动画
- 视频播放按钮触发影片播放

## 图片资源
- /images/highlights/highlights_noise_cancellation.jpg
- /images/highlights/highlights_heart_rate.webp
- /images/highlights/highlights_acoustic.jpg
- /images/highlights/highlights_battery_endframe.jpg