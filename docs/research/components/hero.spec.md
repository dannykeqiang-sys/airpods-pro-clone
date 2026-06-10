# Hero Section 规格文档

> 来源：https://www.apple.com.cn/airpods-pro/ (Chrome DevTools 精确提取)
> 提取日期：2026-06-10

---

## 1. 整体布局

### Hero Section 容器
- **CSS 类**: `section section-welcome section-welcome-localnav-overlap section-welcome-globalnav-overlap`
- **宽度**: 1440px (全宽)
- **高度**: 760px
- **背景色**: `rgb(245, 245, 247)` (#F5F5F7)
- **padding**: 0px (无内边距)
- **特点**: 与全局导航栏和本地导航栏重叠

### 内部结构
Hero Section 由两个主要子容器组成：
1. **marquee** (文字区域): `position: absolute; top: 339px; padding-top: 150px; padding-bottom: 80px`
2. **inline-media-component-container** (视频/图片区域): `position: absolute; top: 0; height: 760px`

---

## 2. 导航栏 (Navbar)

### 全局导航栏 (Global Nav)
- **高度**: 44px
- **背景色**: `rgb(255, 255, 255)` (#FFFFFF)
- **定位**: `position: absolute; z-index: 9999`
- **边框**: 无底部边框
- **链接列表** (从左到右):
  - Apple (Logo) → https://www.apple.com.cn/
  - 商店 → /cn/shop/goto/store
  - Mac → /mac/
  - iPad → /ipad/
  - iPhone → /iphone/
  - Watch → /watch/
  - Vision → /apple-vision-pro/
  - AirPods → /airpods/
  - 家居 → /apple-home/
  - 娱乐 → /entertainment/
  - 配件 → /cn/shop/goto/buy_accessories
  - 技术支持 → support.apple.com
  - 搜索图标 → /search
  - 购物袋图标 → /cn/shop/goto/bag

### 本地导航栏 (Local Nav)
- **高度**: 760px (覆盖整个 Hero 区域)
- **背景色**: `rgb(245, 245, 247)` (#F5F5F7)
- **定位**: `position: relative; z-index: 1`
- **内容**: Hero 区域的文字和购买链接

---

## 3. 产品名称 (Eyebrow)

### H1 - "AirPods Pro 3"
- **字号**: 28px
- **字重**: 600 (semibold)
- **行高**: 35px (1.25)
- **字间距**: 0.196px
- **颜色**: `rgb(29, 29, 31)` (#1D1D1F)
- **字体栈**: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC"
- **对齐**: start (左对齐)
- **宽度**: 630px
- **margin-top**: 8px
- **CSS 类**: `header-eyebrow typography-marquee-eyebrow-base`

---

## 4. 主标题 (Headline)

### H2 - "主动降噪升至两倍，倍加悦耳。"
- **字号**: 64px
- **字重**: 600 (semibold)
- **行高**: 70px (1.09375)
- **字间距**: normal
- **颜色**: `rgb(29, 29, 31)` (#1D1D1F)
- **字体栈**: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC"
- **对齐**: start (左对齐)
- **宽度**: 630px
- **高度**: 140px
- **margin-top**: 8px
- **CSS 类**: `header-headline typography-marquee-headline-base`

---

## 5. 副标题 (Copy)

### P - "效果与 AirPods Pro 2 相比¹"
- **字号**: 17px
- **字重**: 600 (semibold)
- **颜色**: `rgb(29, 29, 31)` (#1D1D1F)
- **CSS 类**: `milestone-primary`
- **宽度**: ~205px
- **脚注链接**: 上标 "1"，链接到 #footnote-1

---

## 6. 价格与购买按钮

### 价格 - "RMB 1899"
- **字号**: 17px
- **字重**: 600 (semibold)
- **颜色**: `rgb(29, 29, 31)` (#1D1D1F)
- **CSS 类**: `ric-dynamic-pricing pricing-product`
- **宽度**: ~86px

### 购买按钮 - "购买"
- **字号**: 17px
- **字重**: 400 (normal)
- **颜色**: `rgb(255, 255, 255)` (#FFFFFF) - 白色文字
- **背景色**: `rgb(0, 113, 227)` (#0071E3) - 蓝色
- **圆角**: 980px (完全圆角，胶囊形状)
- **padding**: `8px 15px`
- **display**: flex
- **CSS 类**: `marquee-ctas-link button`
- **链接**: https://www.apple.com.cn/cn/shop/goto/buy_airpods/airpods_pro_3

### 价格+按钮布局
- 价格和购买按钮在同一行，水平排列
- 价格在左，购买按钮在右

---

## 7. 产品大图/视频

### Hero 视频
- **URL**: `large_2x.mp4`
- **原始尺寸**: 3600×2100 (2x 分辨率)
- **属性**: autoplay, loop, muted, playsInline
- **位置**: 覆盖整个 Hero 区域背景

### Hero 静态图片 (fallback)
- **URL**: `hero__b0eal3mn03ua_large.jpg`
- **尺寸**: 1800×1050
- **alt**: "AirPods Pro 3，左侧和右侧的无线耳机，白色，配有硅胶耳塞"

---

## 8. "定睛细看" 引导标题

### H2 - "定睛细看"
- **字号**: 56px
- **字重**: 600 (semibold)
- **行高**: 60px (1.07143)
- **字间距**: normal
- **颜色**: `rgb(29, 29, 31)` (#1D1D1F)
- **所属 Section**: `section section-product-viewer`
- **CTA**: "摆在眼前看看" (AR 查看链接)

---

## 9. 响应式规格

### 桌面端 (≥1024px, 1440px viewport)
- Hero 高度: 760px
- H1 字号: 28px
- H2 字号: 64px
- 文字区域宽度: 630px
- 文字 padding-top: 150px

### 中等屏幕 (768px-1024px)
- Hero 高度: 适当缩小
- H2 字号: 约 48px
- 文字区域宽度: 适当缩小

### 移动端 (<768px)
- Hero 高度: 适当缩小
- H1 字号: 约 21px
- H2 字号: 约 32px
- 文字区域宽度: 全宽
- 文字 padding-top: 适当缩小