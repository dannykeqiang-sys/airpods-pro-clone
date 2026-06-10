'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HighlightsSection from '@/components/HighlightsSection';
import ProductViewerSection from '@/components/ProductViewerSection';
import NoiseControlSection from '@/components/NoiseControlSection';
import AudioPerformanceSection from '@/components/AudioPerformanceSection';
import PersonalizedListeningSection from '@/components/PersonalizedListeningSection';
import FitnessSection from '@/components/FitnessSection';
import HearingHealthSection from '@/components/HearingHealthSection';
import MagicalSection from '@/components/MagicalSection';
import BatterySection from '@/components/BatterySection';
import IncentiveSection from '@/components/IncentiveSection';
import ContrastSection from '@/components/ContrastSection';
import EnvironmentSection from '@/components/EnvironmentSection';
import ValuesSection from '@/components/ValuesSection';
import IndexSection from '@/components/IndexSection';

/**
 * AirPods Pro 3 页面 - 主页面组装
 * 
 * 页面拓扑顺序（从 PAGE_TOPOLOGY.md）：
 * 1. Navbar (全局导航)
 * 2. HeroSection (Welcome)
 * 3. HighlightsSection (先刷重点)
 * 4. ProductViewerSection (定睛细看)
 * 5. NoiseControlSection (智能噪声控制)
 * 6. AudioPerformanceSection (音频性能)
 * 7. PersonalizedListeningSection (个性化聆听体验)
 * 8. FitnessSection (健身)
 * 9. HearingHealthSection (为听力护航)
 * 10. MagicalSection (使用体验)
 * 11. BatterySection (超长电池续航)
 * 12. IncentiveSection (在 Apple 购买好处)
 * 13. ContrastSection (AirPods 型号对比)
 * 14. EnvironmentSection (与环境)
 * 15. ValuesSection (价值观)
 * 16. IndexSection (AirPods 索引)
 * 
 * 页面级行为：
 * - IntersectionObserver 滚动触发动画
 * - 平滑滚动 (scroll-behavior: smooth)
 * - 各 section 进入视口时渐显
 */
export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // 页面级 IntersectionObserver：为所有 .scroll-animate 元素添加 visible 类
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // 一旦可见，不再观察（避免重复触发）
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // 元素进入视口 15% 时触发
        rootMargin: '0px 0px -50px 0px', // 底部偏移 50px，提前触发
      }
    );

    // 观察所有 scroll-animate 元素
    const animateElements = document.querySelectorAll('.scroll-animate');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // 平滑滚动到锚点
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href) {
          const targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {/* 全局导航栏 */}
      <Navbar />

      {/* 页面主体 */}
      <main ref={mainRef} className="min-h-screen bg-white">
        {/* Section 1: Welcome (Hero) - 首屏大图 */}
        <div className="scroll-animate">
          <HeroSection />
        </div>

        {/* Section 2: Highlights - 先刷重点 */}
        <div className="scroll-animate">
          <HighlightsSection />
        </div>

        {/* Section 3: Product Viewer - 定睛细看 */}
        <div className="scroll-animate">
          <ProductViewerSection />
        </div>

        {/* Section 4: Noise Control - 智能噪声控制 */}
        <div className="scroll-animate">
          <NoiseControlSection />
        </div>

        {/* Section 5: Audio Performance - 音频性能 */}
        <div className="scroll-animate">
          <AudioPerformanceSection />
        </div>

        {/* Section 6: Personalized Listening - 个性化聆听体验 */}
        <div className="scroll-animate">
          <PersonalizedListeningSection />
        </div>

        {/* Section 7: Fitness - 健身 */}
        <div className="scroll-animate">
          <FitnessSection />
        </div>

        {/* Section 8: Hearing Health - 为听力护航 */}
        <div className="scroll-animate">
          <HearingHealthSection />
        </div>

        {/* Section 9: Magical Experience - 使用体验 */}
        <div className="scroll-animate">
          <MagicalSection />
        </div>

        {/* Section 10: Battery - 超长电池续航 */}
        <div className="scroll-animate">
          <BatterySection />
        </div>

        {/* Section 11: Incentive - 在 Apple 购买好处多多 */}
        <div className="scroll-animate">
          <IncentiveSection />
        </div>

        {/* Section 12: Contrast - 看看哪款适合你 */}
        <div className="scroll-animate">
          <ContrastSection />
        </div>

        {/* Section 13: Environment - 与环境 */}
        <div className="scroll-animate">
          <EnvironmentSection />
        </div>

        {/* Section 14: Values - 我们的价值观 */}
        <div className="scroll-animate">
          <ValuesSection />
        </div>

        {/* Section 15: Index - AirPods 索引 */}
        <div className="scroll-animate">
          <IndexSection />
        </div>

        {/* 页脚 */}
        <footer className="bg-apple-bg-secondary py-[20px] px-[22px]">
          <div className="mx-auto max-w-[980px]">
            <p className="text-[12px] text-apple-text-secondary leading-[1.6]">
              Copyright © 2026 Apple Inc. 保留所有权利。
            </p>
            <div className="flex gap-[8px] mt-[8px] text-[12px] text-apple-link">
              <a href="#" className="hover:text-apple-link-hover">隐私政策</a>
              <span className="text-apple-text-secondary">|</span>
              <a href="#" className="hover:text-apple-link-hover">使用条款</a>
              <span className="text-apple-text-secondary">|</span>
              <a href="#" className="hover:text-apple-link-hover">销售政策</a>
              <span className="text-apple-text-secondary">|</span>
              <a href="#" className="hover:text-apple-link-hover">站点地图</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}