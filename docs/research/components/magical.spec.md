# Magical Experience Section 规格文档

## 概述
"使用体验"区域，展示触控操作、Siri、连接设置、播报通知和音频共享。

## 布局结构
- Eyebrow: H2 "使用体验" (typography-eyebrow-elevated)
- Headline: H3 "绝妙不绝于耳" (typography-headline-standalone)
- 主描述: "AirPods Pro 3 绝技满身..."
- 3 个 fade-gallery 图片 (1260x610):
  1. 触控操作 - magical_experience_controls
  2. Siri - connectivity (startframe → endframe)
  3. 设置 - connectivity
- 2 个 callout: 播报通知 + 音频共享 (带图标)

## 内容数据
- 触控操作: "就能调高和调低音量、跳播曲目等..." ⁷
- Siri: "嘿 Siri，给苏宇铃发信息我在路上了" + "就能问路线..." ¹³
- 设置: "只需将耳机靠近 iPhone..." ¹⁴
- 播报通知: "Siri 可读出你收到的信息及提醒..." ¹⁵
- 音频共享: "让你轻松与朋友分享..." ¹⁶

## 样式
- 背景: #f5f5f7 (background-alt)
- Fade-gallery 图片切换展示
- Callout 带图标在底部

## 交互行为
- 滚动触发 fade-gallery 切换动画
- 图片 startframe → endframe 过渡
- staggered-start 动画

## 图片资源
- /images/magical/magical_experience_controls.jpg
- /images/magical/connectivity_startframe.jpg
- /images/magical/connectivity_endframe.jpg
- /images/magical/icon_notifications.png
- /images/magical/icon_audio_sharing.png