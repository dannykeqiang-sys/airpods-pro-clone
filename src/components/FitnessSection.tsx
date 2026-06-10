'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons';

export default function FitnessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setHeroVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="fitness"
      className={`section section-fitness background-alt no-pad-bottom staggered-start bg-gradient-secondary-to-tertiary ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-xl font-semibold text-apple-text-secondary uppercase tracking-wider mb-apple-4">
            健身
          </h2>
          <h3 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            心率传感功能，贴心上线。
          </h3>
        </div>

        {/* Hero Image with Heart Rate Pulse */}
        <div className="relative flex justify-center mb-apple-16">
          <div className="w-full max-w-[640px] aspect-square overflow-hidden rounded-apple-xl">
            <img
              src={heroVisible
                ? '/images/fitness/fitness_hero_endframe.png'
                : '/images/fitness/fitness_hero_startframe.png'}
              alt="AirPods Pro 3, 无线耳机，白色，侧面外观，展示圆柱形耳机短柄、降噪麦克风、硅胶耳塞、光脉冲效果"
              className="w-full h-full object-cover transition-opacity duration-apple-slower"
              loading="lazy"
            />
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-[680px] mx-auto mb-apple-16">
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            全新心率传感功能可在你锻炼时，帮你测量心率和卡路里消耗。借助每秒 256 次非可见光脉冲的 LED，以及基于多个加速感应器的传感器融合技术，AirPods Pro 3 可为你的各类体能训练提供精准的测量数据，健身 app 中的 50 多种项目都适用。而有了更稳更贴耳的设计，你只管放开练起来，不必担心耳机会掉下来。
            <sup>
              <a href="#footnote-3" className="text-apple-link text-apple-xs">3</a>
            </sup>
          </p>
        </div>

        {/* Fitness App Description */}
        <div className="text-center max-w-[680px] mx-auto mb-apple-16">
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            健身 App。只需 AirPods Pro 3 和 iPhone 搭配，就能在健身 app 中开启全新的运动体验，有步行、单车和 HIIT 训练等各种项目任你一试身手。你还能设置喜欢的音乐和播客，在你锻炼时自动播放。此外，你可以随时查看活动圆环，不断给自己激励。
          </p>
        </div>

        {/* IP57 Callout */}
        <div className="flex items-center justify-center gap-apple-6 pb-apple-24">
          <div className="w-16 h-16">
            <img
              src="/images/fitness/icon_water_resistance.png"
              alt="黑色圆形图案上带有水滴图标"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-apple-xl font-semibold text-apple-text-primary">
              IP57 级别防尘、抗汗、抗水。
            </h3>
            <p className="text-apple-base text-apple-text-secondary mt-apple-2">
              AirPods Pro 3 是首款达到 IP57 级别的 AirPods，格外经久耐用。得益于精密工艺与严格测试，哪怕你是在挥汗如雨地体能训练，它也能从容应对。
              <sup>
                <a href="#footnote-6" className="text-apple-link text-apple-xs">6</a>
              </sup>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}