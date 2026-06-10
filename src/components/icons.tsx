import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// ── Apple AirPods Pro 页面 SVG 图标组件 ──

/** 播放按钮 */
export const PlayIcon: React.FC<IconProps> = ({ className = '', size = 56 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="m0 0h56v56h-56z" fill="none" />
    <path
      d="m14 42.16188v-28.26778c0-2.88275 1.73588-4.3941 3.88446-4.3941a4.9721 4.9721 0 0 1 2.97495.83964l23.00036 13.57413c2.03839 1.20348 3.14023 2.18305 3.14023 4.08623s-1.10184 2.88275-3.14023 4.08623l-23.00036 13.57413a4.9721 4.9721 0 0 1 -2.97495.83964c-2.14858 0-3.88446-1.45537-3.88446-4.33812z"
      fill="currentColor"
    />
  </svg>
);

/** 音量图标 */
export const VolumeIcon: React.FC<IconProps> = ({ className = '', size = 21 }) => (
  <svg
    width={size}
    height={size * 1.19}
    viewBox="0 0 21 25"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect width="21" height="25" fill="none" />
    <path
      d="M15.44879,16.3875a.55051.55051,0,0,1-.45716-.85518,5.45379,5.45379,0,0,0-.02246-6.06147.55025.55025,0,1,1,.91236-.61537,6.55712,6.55712,0,0,1,.02637,7.28636A.54931.54931,0,0,1,15.44879,16.3875Z"
      fill="currentColor"
    />
    <path
      d="M18.524,19a.52388.52388,0,0,1-.32053-.109.55375.55375,0,0,1-.10621-.76458,9.543,9.543,0,0,0,0-11.25256.55375.55375,0,0,1,.10621-.76458.52648.52648,0,0,1,.74726.10853,10.65433,10.65433,0,0,1,0,12.56466A.52777.52777,0,0,1,18.524,19Z"
      fill="currentColor"
    />
    <path
      d="M11,20.14826a.93.93,0,0,1-1.58725.58258L4.4,16H1.5A1.50064,1.50064,0,0,1,0,14.5v-4A1.50064,1.50064,0,0,1,1.5,9H4.4L9.41275,4.24957A.93.93,0,0,1,11,4.83215Z"
      fill="currentColor"
    />
  </svg>
);

/** 向右箭头 (CTA) */
export const ArrowRightIcon: React.FC<IconProps> = ({ className = '', size = 9 }) => (
  <svg
    width={size}
    height={size * 1.11}
    viewBox="0 0 9 10"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M7.6,5.8c0.7-0.4,0.7-1.2,0-1.6L2.2,0.5C1.5,0,1,0.3,1,1.1v7.8C1,9.7,1.5,10,2.2,9.5L7.6,5.8z"
      fill="currentColor"
    />
  </svg>
);

/** Chevron 向下 */
export const ChevronDownIcon: React.FC<IconProps> = ({ className = '', size = 10 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1.5 3.5L5 7l3.5-3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/** 全屏图标 */
export const FullscreenIcon: React.FC<IconProps> = ({ className = '', size = 17 }) => (
  <svg
    width={size}
    height={size * 1.47}
    viewBox="0 0 17 25"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="m0 0h17v25h-17z" fill="none" />
    <g fill="currentColor">
      <path d="m9.32047 14.0275 5.97253 5.9725h-4.793a.5.5 0 0 0 0 1h5.3999a1.10154 1.10154 0 0 0 1.1001-1.1001v-5.3999a.5.5 0 0 0-1 0v4.793l-5.9725-5.9725a.49995.49995 0 0 0-.707.707z" />
      <path d="m7.67953 10.9725-5.97253-5.9725h4.793a.5.5 0 0 0 0-1h-5.3999a1.10154 1.10154 0 0 0-1.1001 1.1001v5.3999a.5.5 0 0 0 1 0v-4.793l5.9725 5.9725a.49995.49995 0 0 0 .707-.707z" />
    </g>
  </svg>
);

/** PIP 图标 */
export const PipIcon: React.FC<IconProps> = ({ className = '', size = 21 }) => (
  <svg
    width={size}
    height={size * 1.19}
    viewBox="0 0 21 25"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <title>pip_reduced@1x</title>
    <rect width="21" height="25" fill="none" />
    <path
      d="M2.5,17A1.5,1.5,0,0,1,1,15.5v-9A1.5,1.5,0,0,1,2.5,5h13A1.5,1.5,0,0,1,17,6.5V10h1V6.5A2.5,2.5,0,0,0,15.5,4H2.5A2.5,2.5,0,0,0,0,6.5v9A2.5,2.5,0,0,0,2.5,18H7V17Z"
      fill="currentColor"
    />
    <path
      d="M18.5,11h-8A2.5,2.5,0,0,0,8,13.5v5A2.5,2.5,0,0,0,10.5,21h8A2.5,2.5,0,0,0,21,18.5v-5A2.5,2.5,0,0,0,18.5,11Z"
      fill="currentColor"
    />
  </svg>
);

/** 关闭图标 */
export const CloseIcon: React.FC<IconProps> = ({ className = '', size = 13 }) => (
  <svg
    width={size}
    height={size * 1.62}
    viewBox="0 0 13 21"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="m0 0h13v21h-13z" fill="none" />
    <g fill="currentColor">
      <path d="m.55065 17a.54981.54981 0 0 1-.38865-.93852l11.89991-11.89993a.54967.54967 0 0 1 .77734.77735l-11.89993 11.89993a.548.548 0 0 1-.38867.16117z" />
      <path d="m12.4502 16.99911a.548.548 0 0 1-.38868-.16113l-11.90039-11.90039a.54967.54967 0 0 1 .77735-.77734l11.90039 11.90039a.5498.5498 0 0 1-.38867.93847z" />
    </g>
  </svg>
);

/** 链接图标 */
export const LinkIcon: React.FC<IconProps> = ({ className = '', size = 18 }) => (
  <svg
    width={size}
    height={size * 1.39}
    viewBox="0 0 18 25"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="m0 0h18v25h-18z" fill="none" />
    <g fill="currentColor">
      <path d="m11.39385 10.10615a4.29818 4.29818 0 0 0-1.93835-1.102l-.71729.71759a2.17884 2.17884 0 0 0-.19141.23226 3.25128 3.25128 0 0 1 2.0692 5.52611l-.34785.34785-1.33865 1.33873-1.7835 1.78344a3.25 3.25 0 1 1-4.5962-4.59619l1.784-1.78394a5.47688 5.47688 0 0 1-.07569-.77588 5.48189 5.48189 0 0 1 .076-.78009l-2.56211 2.56208a4.35 4.35 0 0 0 6.15183 6.15189l3.11394-3.114.35608-.356a4.51087 4.51087 0 0 0 1.24573-2.80139 4.34594 4.34594 0 0 0-.14356-1.41137 4.29894 4.29894 0 0 0-1.10217-1.93909z" />
      <path d="m16.228 5.272a4.355 4.355 0 0 0-6.15186 0l-3.09037 3.09037-.35595.356a4.51006 4.51006 0 0 0-1.24573 2.80139 4.34655 4.34655 0 0 0 .14355 1.41144 4.20312 4.20312 0 0 0 3.04053 3.041l.71729-.71753a2.15692 2.15692 0 0 0 .1914-.2323 3.25127 3.25127 0 0 1-2.06921-5.52621l.08335-.08343 1.0508-1.05073 2.3122-2.31213a3.25 3.25 0 1 1 4.5962 4.59619l-1.76033 1.76026a5.49382 5.49382 0 0 1 .07568.77588 5.48188 5.48188 0 0 1-.076.78009l2.53845-2.53846a4.35494 4.35494 0 0 0 0-6.15183z" />
    </g>
  </svg>
);

/** Facebook 分享图标 */
export const FacebookShareIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg
    width={size}
    height={size * 1.25}
    viewBox="0 0 20 25"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="m0 0h20v25h-20z" fill="none" />
    <path
      d="m19.5 12.5a9.5 9.5 0 1 0-10.98438 9.38455v-6.63846h-2.4121v-2.74609h2.4121v-2.093a3.35244 3.35244 0 0 1 3.58828-3.69606 14.60937 14.60937 0 0 1 2.12657.18554v2.3379h-1.198a1.373 1.373 0 0 0-1.54809 1.48362v1.782h2.63476l-.42114 2.74609h-2.21362v6.63846a9.50227 9.50227 0 0 0 8.01562-9.38455z"
      fill="currentColor"
    />
  </svg>
);

/** X (Twitter) 分享图标 */
export const XShareIcon: React.FC<IconProps> = ({ className = '', size = 21 }) => (
  <svg
    width={size}
    height={size * 1.19}
    viewBox="0 0 21 25"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="m11.9 11.2 5.6-6.7h-1.3l-4.8 5.9-3.8-5.9h-4.6l5.8 8.9-5.8 7.1h1.3l5.1-6.2 4.1 6.2h4.5zm-7.1-5.7h2l9.3 14h-2z"
    />
  </svg>
);

/** 降噪图标 */
export const NoiseCancellationIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M24 8v16M8 24h16" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.3" />
  </svg>
);

/** 心率图标 */
export const HeartRateIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M24 4l-4 12h-8l4 8-4 12 8-4 4 8 4-8 8 4-4-12 4-8h-8z"
      fill="currentColor"
    />
  </svg>
);

/** 空间音频图标 */
export const SpatialAudioIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="24" cy="24" r="16" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="24" r="8" fill="currentColor" opacity="0.4" />
    <circle cx="24" cy="24" r="3" fill="currentColor" />
  </svg>
);

/** 防水图标 */
export const WaterResistanceIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M24 8c-8 12-12 18-12 24a12 12 0 0 0 24 0c0-6-4-12-12-24z"
      fill="currentColor"
      opacity="0.6"
    />
  </svg>
);

/** 回收图标 */
export const RecyclingIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M16 8l-4 8h8l-4-8zM32 8l4 8h-8l4-8zM8 20l4 16h-8l4-16zM40 20l-4 16h8l-4-16z"
      fill="currentColor"
    />
    <circle cx="24" cy="28" r="6" fill="currentColor" opacity="0.3" />
  </svg>
);

/** 隐私图标 */
export const PrivacyIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="12" y="20" width="24" height="20" rx="4" fill="currentColor" opacity="0.6" />
    <path d="M16 20V16a8 8 0 0 1 16 0v4" fill="none" stroke="currentColor" strokeWidth="3" />
    <circle cx="24" cy="30" r="3" fill="currentColor" />
  </svg>
);

/** 无障碍图标 */
export const AccessibilityIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="24" cy="8" r="4" fill="currentColor" />
    <path d="M24 16v12M12 20h24M24 28l8 12M24 28l-8 12" stroke="currentColor" strokeWidth="3" fill="none" />
  </svg>
);

/** 通知图标 */
export const NotificationIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M24 4a4 4 0 0 1 4 4v2l8 8v8l-4 4v4H16v-4l-4-4v-8l8-8V8a4 4 0 0 1 4-4z"
      fill="currentColor"
      opacity="0.6"
    />
    <circle cx="24" cy="40" r="4" fill="currentColor" />
  </svg>
);

/** 音频共享图标 */
export const AudioSharingIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="16" cy="20" r="8" fill="currentColor" opacity="0.4" />
    <circle cx="32" cy="20" r="8" fill="currentColor" opacity="0.4" />
    <path d="M16 28h16" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="20" r="3" fill="currentColor" />
    <circle cx="32" cy="20" r="3" fill="currentColor" />
  </svg>
);

/** H2 芯片图标 */
export const ChipIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="12" y="12" width="24" height="24" rx="4" fill="currentColor" opacity="0.6" />
    <rect x="16" y="16" width="16" height="16" rx="2" fill="currentColor" />
    <path d="M20 8v4M28 8v4M20 36v4M28 36v4M8 20h4M8 28h4M36 20h4M36 28h4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/** Apple Logo (简化版) */
export const AppleLogoIcon: React.FC<IconProps> = ({ className = '', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M15.5 9.5c-.1-3.1 2.5-4.6 2.6-4.7-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.6 1.1-4.5 1.1-.9 0-2.4-1.1-4-1-.2 0-3.8.3-5.2 3.6-1.4 3.3.5 8.2 2 10.8 1.1 1.9 2.4 3.9 4.2 3.8 1.7-.1 2.3-1.1 4.3-1.1s2.6 1.1 4.3 1c1.8 0 2.9-1.9 4-3.8.4-.7 2.2-4.4 2.5-8.5-.5.2-3.5 1.5-3.5 5.2z"
      fill="currentColor"
    />
  </svg>
);