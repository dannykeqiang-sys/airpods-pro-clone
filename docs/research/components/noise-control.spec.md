# Noise Control Section 规格文档

## 概述
"智能噪声控制"区域，展示降噪功能，含涟漪动画和 4 个功能卡片。

## 布局结构
- Eyebrow: H2 "智能噪声控制" (typography-eyebrow-elevated)
- Headline: H3 "非天籁，不入耳。" (typography-headline-standalone)
- Hero: 大图 (1440x1440) 涟漪动画 (startframe → endframe)
- 4 个 caption-tile 卡片 (372x580)

## 内容数据
- 主描述: "AirPods Pro 3 可运用先进的计算音频技术..."
1. 全新超低噪声麦克风 - "AirPods Pro 3 能在你通话时降低背景噪声..." ¹⁰
2. 语音突显 - 同上
3. 自适应音频 - "融合主动降噪功能和优化的通透模式..." ¹¹
4. 对话感知 - "感知到你在和身边的人说话时..." ¹²

## 样式
- 背景: linear-gradient(white → #f5f5f7)
- Hero 区域居中，涟漪动画从 startframe 到 endframe
- 4 个卡片在 hero 下方，2x2 网格布局
- 卡片图片: 372x580

## 交互行为
- 滚动触发涟漪动画 (noise_control_startframe → noise_control_endframe)
- 卡片 hover 效果
- 滚动触发 staggered-start 动画

## 图片资源
- /images/noiseControl/noise_control_startframe.png
- /images/noiseControl/noise_control_endframe.png
- /images/noiseControl/noise_control_low_noise_mic.jpg
- /images/noiseControl/noise_control_voice_isolation.jpg
- /images/noiseControl/noise_control_adaptive_audio.jpg
- /images/noiseControl/noise_control_conversation_awareness.webp