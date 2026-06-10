'use client';

import React, { useRef, useEffect, useState } from 'react';
import { ArrowRightIcon } from './icons';

/**
 * Apple AirPods Pro Hero Section
 * 
 * 规格（从 Chrome DevTools 精确提取）：
 * - Section 高度: 760px, 背景色: #F5F5F7
 * - H1 "AirPods Pro 3": 28px/600/35px, #1D1D1F
 * - H2 "主动降噪升至两倍，倍加悦耳。": 64px/600/70px, #1D1D1F
 * - 副标题 "效果与 AirPods Pro 2 相比": 17px/600, #1D1D1F
 * - 价格 "RMB 1899": 17px/600, #1D1D1F
 * - 购买按钮: 17px/400, #FFFFFF on #0071E3, borderRadius: 980px, padding: 8px 15px
 * - 文字区域宽度: 630px, padding-top: 150px
 * - Hero 视频: autoplay, loop, muted, playsInline
 * - 与导航栏重叠 (section-welcome-globalnav-overlap)
 */
export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay may be blocked, fallback to static image
      });
    }
  }, []);

  return (
    <section
      className="relative w-full h-[760px] bg-apple-bg-secondary overflow-hidden"
      style={{ backgroundColor: '#F5F5F7' }}
    >
      {/* Hero 视频/图片背景 */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* 视频背景 */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/hero/hero_startframe.jpg"
        >
          <source src="/videos/hero/hero.mp4" type="video/mp4" />
        </video>

        {/* 静态图片 fallback */}
        {!isVideoLoaded && (
          <img
            src="/images/hero/hero.jpg"
            alt="AirPods Pro 3，左侧和右侧的无线耳机，白色，配有硅胶耳塞"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      {/* 文字内容区域 */}
      <div className="relative z-10 mx-auto max-w-[980px] px-[22px] pt-[150px] pb-[80px]">
        {/* 产品名称 - Eyebrow */}
        <h1
          className="text-[28px] font-semibold leading-[35px] tracking-[0.196px] text-apple-text-primary max-w-[630px] mt-[8px] mb-0"
          style={{ fontFamily: '"SF Pro SC", "SF Pro Display", "PingFang SC", sans-serif' }}
        >
          AirPods Pro 3
        </h1>

        {/* 主标题 - Headline */}
        <h2
          className="text-[64px] font-semibold leading-[70px] text-apple-text-primary max-w-[630px] mt-[8px] mb-0"
          style={{ fontFamily: '"SF Pro SC", "SF Pro Display", "PingFang SC", sans-serif' }}
        >
          主动降噪升至两倍，倍加悦耳。
        </h2>

        {/* 副标题 - Copy */}
        <p className="text-[17px] font-semibold text-apple-text-primary mt-[8px] mb-0 max-w-[630px]">
          效果与 AirPods Pro 2 相比
          <a
            href="#footnote-1"
            className="text-[17px] font-semibold text-apple-text-primary hover:text-apple-link transition-colors duration-apple-fast ease-apple-default inline-flex items-center"
            aria-label="脚注 1"
          >
            <sup className="text-[0.7em] font-semibold ml-[2px]">1</sup>
          </a>
        </p>

        {/* 了解更多链接 */}
        <div className="mt-[16px] max-w-[630px]">
          <a
            href="#film-airpods-pro-3"
            className="inline-flex items-center gap-[4px] text-[17px] font-normal text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast ease-apple-default group"
          >
            观看影片
            <span className="inline-block transition-transform duration-apple-fast ease-apple-default group-hover:translate-x-[4px]">
              <ArrowRightIcon size={9} />
            </span>
          </a>
        </div>
      </div>

      {/* 价格和购买按钮 - 右下角独立浮窗 (marquee-detail) */}
      <div
        className="absolute bottom-[80px] right-[22px] z-20 flex items-center gap-[12px]"
        style={{ right: 'calc((100% - 980px) / 2 + 22px)' }}
      >
        {/* 价格 */}
        <p className="text-[17px] font-semibold text-apple-text-primary">
          RMB 1899
        </p>

        {/* 购买按钮 */}
        <a
          href="/cn/shop/goto/buy_airpods/airpods_pro_3"
          className="inline-flex items-center justify-center text-[17px] font-normal text-white bg-apple-link rounded-[980px] py-[8px] px-[15px] hover:bg-apple-link-hover transition-colors duration-apple-fast ease-apple-default"
          style={{ backgroundColor: '#0071E3', color: '#FFFFFF' }}
        >
          购买
        </a>
      </div>

      {/* 响应式样式 - 中等屏幕 */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            height: auto;
            min-height: 600px;
          }
        }
      `}</style>
    </section>
  );
}