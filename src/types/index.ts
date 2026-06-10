// ── Apple AirPods Pro 页面 TypeScript 类型定义 ──

/** Section 类型 */
export interface SectionData {
  id?: string;
  className: string;
  headings: HeadingData[];
  offsetTop: number;
  background?: string;
}

/** 标题层级数据 */
export interface HeadingData {
  level: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  text: string;
}

/** 图片资源数据 */
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  format: 'jpg' | 'png' | 'webp';
  loading?: 'auto' | 'lazy';
  section?: string;
  localPath?: string;
}

/** 视频资源数据 */
export interface VideoAsset {
  src: string;
  poster?: string;
  sources: VideoSource[];
  autoplay: boolean;
  loop: boolean;
  muted: boolean;
  playsInline: boolean;
  controls?: boolean;
  section?: string;
  localPath?: string;
}

/** 视频源数据 */
export interface VideoSource {
  src: string;
  type: string;
}

/** SVG 图标数据 */
export interface SvgIconData {
  name: string;
  viewBox: string;
  width: number;
  height: number;
  fill: string;
  paths: string[];
}

/** 颜色 Token */
export interface ColorToken {
  name: string;
  value: string;
  hex?: string;
  category: 'core' | 'functional' | 'border' | 'overlay';
  usage: string;
}

/** 字体 Token */
export interface FontToken {
  name: string;
  value: string;
  usage: string;
}

/** 间距 Token */
export interface SpacingToken {
  name: string;
  value: string;
  pxValue: number;
  usage: string;
}

/** 动画 Token */
export interface AnimationToken {
  name: string;
  value: string;
  category: 'duration' | 'easing';
  usage: string;
}

/** CTA 链接数据 */
export interface CtaLinkData {
  text: string;
  href: string;
  type: 'learn-more' | 'buy' | 'watch-film' | 'ar-view';
}

/** 导航项数据 */
export interface NavItemData {
  text: string;
  href: string;
  className?: string;
  children?: NavItemData[];
}

/** 交互行为数据 */
export interface BehaviorData {
  id: string;
  type: 'scroll-triggered' | 'hover' | 'click' | 'video' | 'animation';
  trigger: string;
  description: string;
  duration?: string;
  easing?: string;
  section?: string;
}

/** 渐变数据 */
export interface GradientData {
  name: string;
  value: string;
  usage: string;
}

/** 页面拓扑数据 */
export interface PageTopology {
  title: string;
  sections: SectionData[];
  globalNav: NavItemData[];
  localNav: NavItemData[];
}

/** 设计 Token 集合 */
export interface DesignTokens {
  colors: ColorToken[];
  fonts: FontToken[];
  spacing: SpacingToken[];
  animations: AnimationToken[];
  gradients: GradientData[];
}

/** 产品查看器视角 */
export interface ProductViewerTab {
  id: string;
  label: string;
  image: ImageAsset;
  startframe?: ImageAsset;
  endframe?: ImageAsset;
}

/** 噪声控制子功能 */
export interface NoiseControlFeature {
  id: string;
  title: string;
  description: string;
  image: ImageAsset;
  icon?: SvgIconData;
}

/** 对比卡片数据 */
export interface ContrastCardData {
  productName: string;
  image: ImageAsset;
  features: ContrastFeature[];
}

/** 对比功能项 */
export interface ContrastFeature {
  icon: ImageAsset;
  label: string;
  available: boolean;
}