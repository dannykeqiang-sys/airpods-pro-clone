# Apple AirPods Pro 页面 - 全局设计 Token

> 来源：https://www.apple.com.cn/airpods-pro/
> 提取日期：2026-06-10

---

## 1. 字体系统 (Typography)

### 主字体栈

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--font-primary` | `"SF Pro SC", "SF Pro Text", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif` | 中文正文、标题 |
| `--font-display` | `"SF Pro Display", "SF Pro SC", "PingFang SC", sans-serif` | 大标题、Hero 区域 |
| `--font-icons` | `"SF Pro Icons"` | 图标字体 |
| `--font-legacy-chevron` | `"Apple Legacy Chevron"` | 导航箭头图标 |

### 字号体系

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--text-xs` | `12px` | 辅助文字、脚注 |
| `--text-sm` | `14px` | 小号正文 |
| `--text-base` | `16px` | 默认正文 |
| `--text-lg` | `17px` | 大号正文 |
| `--text-xl` | `21px` | 小标题 |
| `--text-2xl` | `24px` | 中标题 |
| `--text-3xl` | `28px` | 大标题 |
| `--text-4xl` | `32px` | Section 标题 |
| `--text-5xl` | `40px` | Hero 标题 |
| `--text-6xl` | `48px` | 超大标题 |
| `--text-7xl` | `56px` | 主 Hero 标题 |
| `--text-8xl` | `80px` | 特大标题 |
| `--text-9xl` | `96px` | 巨幅标题 |

### 字重

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--weight-normal` | `400` | 正文 |
| `--weight-medium` | `500` | 强调正文 |
| `--weight-semibold` | `600` | 小标题 |
| `--weight-bold` | `700` | 标题 |

### 行高

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--leading-tight` | `1.05` | 大标题 |
| `--leading-snug` | `1.1` | Section 标题 |
| `--leading-normal` | `1.4` | 正文 |
| `--leading-relaxed` | `1.5` | 长文本 |
| `--leading-loose` | `1.6` | 注释 |

---

## 2. 颜色系统 (Colors)

### 核心色

| Token 名称 | 值 (RGB) | HEX | 用途 |
|---|---|---|---|
| `--color-black` | `rgb(0, 0, 0)` | `#000000` | 深色背景、主文字 |
| `--color-text-primary` | `rgb(29, 29, 31)` | `#1D1D1F` | 主要文字颜色 |
| `--color-white` | `rgb(255, 255, 255)` | `#FFFFFF` | 白色背景、反色文字 |
| `--color-bg-light` | `rgb(250, 250, 252)` | `#FAFAFC` | 浅灰背景 |
| `--color-bg-secondary` | `rgb(245, 245, 247)` | `#F5F5F7` | Section 背景 |
| `--color-bg-tertiary` | `rgb(225, 225, 227)` | `#E1E1E3` | 深灰背景过渡 |
| `--color-text-secondary` | `rgb(110, 110, 115)` | `#6E6E73` | 辅助文字 |
| `--color-text-tertiary` | `rgb(134, 134, 139)` | `#86868B` | 三级文字 |
| `--color-text-dark-secondary` | `rgb(91, 91, 97)` | `#5B5B61` | 深色模式辅助文字 |
| `--color-text-dark` | `rgb(66, 66, 69)` | `#424245` | 深色文字 |
| `--color-text-darker` | `rgb(51, 51, 54)` | `#333336` | 更深文字 |

### 功能色

| Token 名称 | 值 (RGB) | HEX | 用途 |
|---|---|---|---|
| `--color-link` | `rgb(0, 113, 227)` | `#0071E3` | 链接蓝色 |
| `--color-link-hover` | `rgb(0, 102, 204)` | `#0066CC` | 链接 hover |
| `--color-green` | `rgb(0, 200, 102)` | `#00C866` | 成功/健康指标 |
| `--color-purple` | `rgb(134, 104, 255)` | `#8668FF` | 空间音频紫色 |
| `--color-orange` | `rgb(237, 99, 0)` | `#ED6300` | 警告/橙色强调 |
| `--color-teal` | `rgb(0, 161, 179)` | `#00A1B3` | 青色强调 |

### 边框/分隔线色

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--color-border-light` | `rgba(232, 232, 237, 0.4)` | 浅色边框 |
| `--color-border-medium` | `rgba(232, 232, 237, 0.72)` | 中等边框 |
| `--color-border-dark` | `rgba(210, 210, 215, 0.64)` | 深色边框 |
| `--color-divider` | `rgb(232, 232, 237)` | 分隔线 |

### 透明度色

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--color-overlay-light` | `rgba(0, 0, 0, 0.16)` | 轻遮罩 |
| `--color-overlay-medium` | `rgba(0, 0, 0, 0.56)` | 中遮罩 |
| `--color-overlay-heavy` | `rgba(0, 0, 0, 0.72)` | 重遮罩 |
| `--color-overlay-dark` | `rgba(0, 0, 0, 0.8)` | 深遮罩 |
| `--color-overlay-max` | `rgba(0, 0, 0, 0.88)` | 最大遮罩 |
| `--color-white-overlay-light` | `rgba(255, 255, 255, 0.16)` | 白色轻遮罩 |
| `--color-white-overlay-medium` | `rgba(255, 255, 255, 0.32)` | 白色中遮罩 |
| `--color-white-overlay-heavy` | `rgba(255, 255, 255, 0.67)` | 白色重遮罩 |
| `--color-white-overlay-max` | `rgba(255, 255, 255, 0.8)` | 白色最大遮罩 |

---

## 3. 渐变系统 (Gradients)

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--gradient-white-to-secondary` | `linear-gradient(rgb(255, 255, 255), rgb(245, 245, 247))` | 噪声控制 Section |
| `--gradient-secondary-to-dark` | `linear-gradient(rgb(245, 245, 247) 85%, rgb(0, 0, 0) 0px)` | 个性化聆听过渡 |
| `--gradient-secondary-to-tertiary` | `linear-gradient(rgb(245, 245, 247), rgb(225, 225, 227))` | 健身 Section |
| `--gradient-overlay-dark` | `linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.56))` | 视频控制遮罩 |

---

## 4. 间距系统 (Spacing)

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--space-1` | `4px` | 微间距 |
| `--space-2` | `8px` | 小间距 |
| `--space-3` | `12px` | 中小间距 |
| `--space-4` | `16px` | 默认间距 |
| `--space-5` | `20px` | 中间距 |
| `--space-6` | `24px` | 大间距 |
| `--space-8` | `32px` | Section 内间距 |
| `--space-10` | `40px` | Section 间距 |
| `--space-12` | `48px` | 大 Section 间距 |
| `--space-16` | `64px` | Hero 间距 |
| `--space-20` | `80px` | 页面级间距 |
| `--space-24` | `96px` | 最大间距 |

---

## 5. 圆角系统 (Border Radius)

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--radius-sm` | `4px` | 小圆角 |
| `--radius-md` | `8px` | 中圆角 |
| `--radius-lg` | `12px` | 卡片圆角 |
| `--radius-xl` | `16px` | 大卡片圆角 |
| `--radius-2xl` | `20px` | 模态框圆角 |
| `--radius-full` | `9999px` | 完全圆角（圆形） |

---

## 6. 阴影系统 (Shadows)

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.06)` | 微阴影 |
| `--shadow-md` | `0 4px 12px rgba(0, 0, 0, 0.08)` | 中阴影 |
| `--shadow-lg` | `0 8px 24px rgba(0, 0, 0, 0.12)` | 大阴影 |
| `--shadow-xl` | `0 16px 48px rgba(0, 0, 0, 0.16)` | 超大阴影 |

---

## 7. 动画系统 (Motion)

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--duration-fast` | `200ms` | 快速过渡 |
| `--duration-normal` | `400ms` | 正常过渡 |
| `--duration-slow` | `600ms` | 慢速过渡 |
| `--duration-slower` | `800ms` | 更慢过渡 |
| `--ease-default` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | 默认缓动 |
| `--ease-in` | `cubic-bezier(0.42, 0, 1, 1)` | 缓入 |
| `--ease-out` | `cubic-bezier(0, 0, 0.58, 1)` | 缓出 |
| `--ease-in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` | 缓入缓出 |
| `--ease-spring` | `cubic-bezier(0.175, 0.885, 0.32, 1.275)` | 弹性缓动 |

---

## 8. 断点系统 (Breakpoints)

| Token 名称 | 值 | 用途 |
|---|---|---|
| `--bp-sm` | `576px` | 小屏手机 |
| `--bp-md` | `768px` | 平板 |
| `--bp-lg` | `1024px` | 小桌面 |
| `--bp-xl` | `1440px` | 大桌面 |

---

## 9. Favicon

| 属性 | 值 |
|---|---|
| 类型 | `image/svg+xml` |
| URL | `/favicon.ico` (SVG 格式) |
| 颜色 | 黑色 Apple Logo |

---

## 10. 图片资源清单

### Hero 区域

| 文件名 | 尺寸 | 格式 | 描述 |
|---|---|---|---|
| `hero__b0eal3mn03ua_large.jpg` | 1800×1050 | JPG | AirPods Pro 3 主图 |
| `hero_endframe__vzawkxxoc72u_large.jpg` | 1800×1050 | JPG | Hero 结束帧 |
| `hero_startframe__bfinf01b59si_large.jpg` | 1800×1050 | JPG | Hero 开始帧 |

### Highlights 区域

| 文件名 | 尺寸 | 格式 | 描述 |
|---|---|---|---|
| `highlights_noise_cancellation__cxd50c0etw4m_large.jpg` | - | JPG | 降噪功能 |
| `highlights_heart_rate__emqj469iyfsm_large.webp` | - | WEBP | 心率传感 |
| `highlights_acoustic__fiq4ppflft6q_large.jpg` | - | JPG | 音质体验 |
| `highlights_noise_cancellation_hearing_aid__eni46zr12ogi_large.jpg` | - | JPG | 降噪+助听 |
| `highlights_battery_endframe__f5ljqvliqpym_large.jpg` | 1260×680 | JPG | 电池续航 |
| `highlights_battery_startframe__djmk5ebqjs8y_large.jpg` | 1260×680 | JPG | 电池开始帧 |

### Product Viewer 区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `closer_look_initial__cksqga5hm77m_large.jpg` | JPG | 产品初始视图 |
| `closer_look_acoustic_a__dz4nc2yr9aqa_large.jpg` | JPG | 音质细看 |
| `closer_look_fit_feel__blsfw2dgyj6q_large.jpg` | JPG | 佩戴感细看 |
| `closer_look_heart_rate__bt709o8p7t5y_large.jpg` | JPG | 心率细看 |
| `closer_look_water_resistance__btut3m43on36_large.jpg` | JPG | 防水细看 |
| `closer_look_touch_control__dqo4p6ue36gm_large.jpg` | JPG | 触控细看 |
| `closer_look_case__bjx2hp0oo16u_large.jpg` | JPG | 充电盒细看 |

### 噪声控制区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `noise_control_startframe__fea2j3ie71ea_large.png` | PNG | 噪声控制开始帧 |
| `noise_control_endframe__c9nekquzw4q6_large.png` | PNG | 噪声控制结束帧 |
| `noise_control_low_noise_mic__kb6kvtgc5aa2_large.jpg` | JPG | 降噪麦克风 |
| `noise_control_voice_isolation__c6b9qlmdbx4y_large.jpg` | JPG | 语音突显 |
| `noise_control_adaptive_audio__gcfn46ubu82u_large.jpg` | JPG | 自适应音频 |
| `noise_control_conversation_awareness__fl1nx541suye_large.webp` | WEBP | 对话感知 |

### 音频性能区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `audio_airpods_pro_pair__v28g95nj97mq_large.png` | PNG | AirPods Pro 配对 |
| `design_startframe__cy9tz9to92oi_large.png` | PNG | 设计开始帧 |
| `design_endframe__gc2e2e5qz7ue_large.png` | PNG | 设计结束帧 |
| `audio_airpods_pro_guts__gbhfrhkjpjyy_large.png` | PNG | 内部构造透视 |

### 个性化聆听区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `personalized_listening__geshsqt82yeu_large.jpg` | JPG | 个性化聆听 |
| `icon_adaptive_eq__byv4qlrb6cz6_large.png` | PNG | 自适应均衡图标 |
| `icon_personalized_spatial_audio__s1e3hae8l4ya_large.png` | PNG | 空间音频图标 |
| `icon_dynamic_head_tracking__c4hu1xaevcuq_large.png` | PNG | 动态头部追踪图标 |

### 健身区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `fitness_hero_endframe__cbbu1uukdjyq_large.png` | PNG | 健身 Hero 结束帧 |
| `fitness_hero_startframe__bkez1lr95bde_large.png` | PNG | 健身 Hero 开始帧 |
| `icon_water_resistance__t2rmbvnakkyq_large.png` | PNG | 防水图标 |
| `fitness_workout_buddy_lifestyle__eavcyne0aaoi_large.png` | PNG | 健身伙伴 |

### 听力健康区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `hearing_health_lifestyle__cj3yilvm69ea_large.png` | PNG | 听力健康生活 |
| `hearing_health_lifestyle_enhanced__fkdyyeq20bau_large.png` | PNG | 听力健康增强 |
| `hearing_health_endframe__fddd0pwvl3u6_large.png` | PNG | 听力健康结束帧 |
| `hearing_health_startframe__b55bsu6g3ok2_large.png` | PNG | 听力健康开始帧 |

### 使用体验区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `magical_experience_controls__bfwb869bitbm_large.jpg` | JPG | 触控体验 |
| `connectivity_endframe__c1c58umoj7au_large.jpg` | JPG | 连接结束帧 |
| `connectivity_startframe__bxoyv9avrimu_large.jpg` | JPG | 连接开始帧 |
| `icon_notifications__dz0hl8mc152e_large.png` | PNG | 通知图标 |
| `icon_audio_sharing__bk0bzzrjku1y_large.png` | PNG | 音频共享图标 |

### 电池区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `case__b87ou7jna9de_large.png` | PNG | 充电盒 |
| `find_my__cvjw4c07da2q_large.webp` | WEBP | 查找功能 |

### 对比区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `explore_airpods_pro_3_open__e4dxk8zpalkm_large.jpg` | JPG | AirPods Pro 3 |
| `icon_active_noise_cancellation__cu3ni5umcw6e_large.png` | PNG | 降噪图标 |
| `icon_group_2__egj6xed61t4y_large.png` | PNG | 空间音频图标组 |
| `person_spatialaudio__c9wmu8y19oom_large.png` | PNG | 空间音频人物 |
| `icon_heart_rate__bi0fmerqeknm_large.png` | PNG | 心率图标 |
| `icon_ear_badge_waveform_elevated__gjfl9l9fv6mq_large.png` | PNG | 耳机波形图标 |
| `chip_h2__fxu57e22criy_large.png` | PNG | H2 芯片 |

### 环境/价值观区域

| 文件名 | 格式 | 描述 |
|---|---|---|
| `icon_recycling__c7i5efoa8p8i_large.png` | PNG | 回收图标 |
| `icon_electricity__ggoppgvmfpua_large.png` | PNG | 电力图标 |
| `icon_package__es51hf1p9h8i_large.png` | PNG | 包装图标 |
| `icon_environment__fo04kjojopym_large.png` | PNG | 环境图标 |
| `icon_privacy__59wrw6a3keqa_large.png` | PNG | 隐私图标 |
| `icon_accessibility__d2tat6ki2tua_large.png` | PNG | 无障碍图标 |

---

## 11. 视频资源清单

| URL | 用途 | 属性 |
|---|---|---|
| `large_2x.mp4` (Hero) | Hero 区域动画 | autoplay, loop, muted, playsInline |
| 多个 Section 内嵌视频 | 各功能展示 | muted, playsInline |

---

## 12. SVG 图标清单

页面内嵌 SVG 主要用于：
- 导航箭头（chevron）
- 视频播放器控制（播放、暂停、音量、全屏、PIP）
- 社交分享按钮（Facebook、X/Twitter、LINE）
- 链接复制图标
- 指南针/方向图标

所有 SVG 使用 `#fff` 白色填充，尺寸约 20×25px。