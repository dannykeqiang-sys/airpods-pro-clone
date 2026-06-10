# Apple AirPods Pro 页面 - 拓扑结构文档

> 来源：https://www.apple.com.cn/airpods-pro/
> 提取日期：2026-06-10

---

## 页面整体结构

```
<html>
  <head>
    ├── <meta> (charset, viewport, description, og:*)
    ├── <link> (favicon, stylesheets)
    ├── <title> AirPods Pro 3 - Apple (中国大陆)
  </head>
  <body>
    ├── <nav> 全球导航栏 (globalnav)
    ├── <nav> 本地导航栏 (localnav)
    ├── <main> 页面主体
    │   ├── Section 1: Welcome (Hero)
    │   ├── Section 2: Highlights (先刷重点)
    │   ├── Section 3: Product Viewer (定睛细看)
    │   ├── Section 4: Noise Control (智能噪声控制)
    │   ├── Section 5: Audio Performance (音频性能)
    │   ├── Section 6: Personalized Listening (个性化聆听体验)
    │   ├── Section 7: Fitness (健身)
    │   ├── Section 8: Hearing Health (为听力护航)
    │   ├── Section 9: Magical Experience (使用体验)
    │   ├── Section 10: Battery (超长电池续航)
    │   ├── Section 11: Incentive (在 Apple 购买好处)
    │   ├── Section 12: Contrast (AirPods 型号对比)
    │   ├── Section 13: Environment (与环境)
    │   ├── Section 14: Values (价值观)
    │   ├── Section 15: Index (AirPods 索引)
    ├── <footer> 页脚 (ac-gf-footer)
  </body>
</html>
```

---

## 各区块详细结构

### Section 1: Welcome (Hero)
- **CSS 类**: `section section-welcome section-welcome-localnav-overlap section-welcome-globalnav-overlap`
- **offsetTop**: 0
- **标题层级**:
  - H1: "AirPods Pro 3"
  - H2: "主动降噪升至两倍，倍加悦耳。"
- **子元素**:
  - Hero 视频容器（含 `<video>` 元素）
  - 标题文字容器
- **特点**: 与导航栏重叠，视频背景

### Section 2: Highlights (先刷重点)
- **CSS 类**: `section section-highlights`
- **offsetTop**: 760
- **标题层级**:
  - H2: "先刷重点"
- **子元素**:
  - section-header (标题 + CTA 链接)
  - Highlights 卡片网格（6 张功能卡片）
- **CTA 链接**: "观看影片" → `#film-airpods-pro-3`

### Section 3: Product Viewer (定睛细看)
- **CSS 类**: `section section-product-viewer`
- **offsetTop**: 1986
- **标题层级**:
  - H2: "定睛细看"
- **子元素**:
  - section-header (标题 + CTA)
  - 产品查看器容器（6 个视角切换标签）
- **CTA 链接**: "在你的空间中查看"

### Section 4: Noise Control (智能噪声控制)
- **CSS 类**: `section section-noise-control`
- **offsetTop**: 3046
- **标题层级**:
  - H2: "智能噪声控制"
  - H3: "非天籁，不入耳。"
  - H3: "全新超低噪声麦克风。"
  - H3: "语音突显。"
  - H3: "自适应音频。"
  - H3: "对话感知。"
- **子元素**:
  - section-header-intro (标题介绍)
  - 噪声控制动画容器（圆形涟漪）
  - Gallery 图片切换区域
- **背景**: `linear-gradient(rgb(255, 255, 255), rgb(245, 245, 247))`

### Section 5: Audio Performance (音频性能)
- **CSS 类**: `section section-audio-performance`
- **offsetTop**: 5881
- **标题层级**:
  - H2: "音频性能"
  - H3: "好声音，由科技领衔。"
- **子元素**:
  - section-header-intro
  - AirPods 设计动画容器（外观 → 内部构造过渡）

### Section 6: Personalized Listening (个性化聆听体验)
- **CSS 类**: `section section-personalized-listening`
- **id**: `personalized-listening`
- **offsetTop**: 8332
- **标题层级**:
  - H2: "个性化聆听体验"
  - H3: "只为取悦你双耳"
- **子元素**:
  - section-header-intro
  - 三个功能图标卡片（自适应均衡、空间音频、头部追踪）
- **背景**: `linear-gradient(rgb(245, 245, 247) 85%, rgb(0, 0, 0) 0px)` → 过渡到深色

### Section 7: Fitness (健身)
- **CSS 类**: `section section-fitness`
- **id**: `fitness`
- **offsetTop**: 10803
- **标题层级**:
  - H2: "健身"
  - H3: "心率传感功能，贴心上线。"
  - H3: "IP57 级别防尘、抗汗、抗水。"
- **子元素**:
  - section-header-intro
  - 心率传感动画 + 防水图标
- **背景**: `linear-gradient(rgb(245, 245, 247), rgb(225, 225, 227))`

### Section 8: Hearing Health (为听力护航)
- **CSS 类**: `section section-hearing-health`
- **id**: `hearing-health`
- **offsetTop**: 13560
- **标题层级**:
  - H2: "为听力护航"
  - H3: "强噪音，尽可能减轻。"
- **子元素**:
  - section-header-intro
  - 听力保护动画容器

### Section 9: Magical Experience (使用体验)
- **CSS 类**: `section section-magical`
- **offsetTop**: 15053
- **标题层级**:
  - H2: "使用体验"
  - H3: "绝妙不绝于耳"
  - H4: "通过简单的触控操作"
  - H4: "有了 Siri"
  - H4: "要设置 AirPods Pro 3"
  - H3: "播报通知。"
  - H3: "音频共享。"
- **子元素**:
  - section-header-intro
  - 触控展示图片
  - 功能卡片（通知播报、音频共享）

### Section 10: Battery (超长电池续航)
- **CSS 类**: `section section-battery`
- **id**: `battery`
- **offsetTop**: 16598
- **标题层级**:
  - H2: "超长电池续航"
  - H3: "从早到晚，都能畅快听。"
  - H2: "查找功能支持精确查找"
- **子元素**:
  - section-header-intro
  - 充电盒图片
  - 查找功能展示

### Section 11: Incentive (在 Apple 购买好处)
- **CSS 类**: `section section-incentive`
- **offsetTop**: 18682
- **标题层级**:
  - H2: "在 Apple 购买 AirPods，好处多多。"
  - H3: "免费镌刻服务"
  - H3: "送货和取货"
  - H3: "分期付款服务"
  - H3: "导购"
  - H3: "Apple Store App"
- **子元素**:
  - section-header (标题 + CTA)
  - Feature card gallery（5 张卡片）
- **CTA**: "选购 AirPods Pro"

### Section 12: Contrast (AirPods 型号对比)
- **CSS 类**: `section section-contrast`
- **offsetTop**: 19513
- **标题层级**:
  - H2: "看看哪款 AirPods 适合你"
  - H3: "AirPods Pro 3"
  - H3: "AirPods 4 (支持主动降噪)"
- **子元素**:
  - section-header (标题 + CTA)
  - 对比卡片（两列布局）

### Section 13: Environment (与环境)
- **CSS 类**: `section section-environment`
- **offsetTop**: 21912
- **标题层级**:
  - H2: "AirPods Pro 3 与环境"
  - H3: "制造采用的回收材料重量占比达 40%。"
  - H3: "生产制造采用 40% 可再生电力。"
  - H3: "紧凑包装让每次运输的货物量增加 25%。"
- **子元素**:
  - section-header (标题 + CTA)
  - 三个环境指标卡片（回收、电力、包装）

### Section 14: Values (价值观)
- **CSS 类**: `section section-values`
- **offsetTop**: 22601
- **标题层级**:
  - H2: "我们的价值观，为我们导航。"
  - H3: "我们的计划，和我们的产品一样突破创新。"
  - H3: "力保个人信息安全，这很 Apple。"
  - H3: "种种创新，为辅助使用而设计。"
- **子元素**:
  - section-header
  - 三个价值观卡片（环境、隐私、无障碍）

### Section 15: Index (AirPods 索引)
- **CSS 类**: `section section-index`
- **offsetTop**: 23231
- **标题层级**:
  - H2: "AirPods"
  - H3: "探索 AirPods"
  - H3: "选购 AirPods"
  - H3: "AirPods 相关"

---

## 导航结构

### 全球导航栏 (Global Nav)
- **位置**: 页面顶部，固定定位
- **结构**: 水平导航条，包含以下主要链接：
  - Apple (首页)
  - 商店
  - Mac
  - iPad
  - iPhone
  - Watch
  - Vision
  - AirPods
  - 家居
  - 娱乐
  - 配件
  - 技术支持
- **交互**: hover 展开下拉子菜单

### 本地导航栏 (Local Nav)
- **位置**: 全球导航下方，sticky 定位
- **结构**: AirPods Pro 子页面导航
- **链接**: 各 Section 的锚点链接
- **特点**: 随滚动高亮当前 Section

---

## 页脚结构

### Footer 目录
- **结构**: 多列布局，包含以下分类：
  - 选购及了解
  - Apple 钱包
  - 账户
  - 娱乐
  - Apple Store 商店
  - 商务应用
  - 教育应用
  - Apple 价值观
  - 关于 Apple

### Footer 底部
- 版权信息
- 法律条款链接
- 网站地图