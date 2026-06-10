'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons';

interface PersonalizedFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  footnote: string;
}

const personalizedFeatures: PersonalizedFeature[] = [
  {
    id: 'adaptive-eq',
    title: '自适应均衡功能',
    description: '可根据 AirPods 的佩戴贴合度，实时调整你耳中的音乐效果。内向式麦克风会检测你聆听的内容，并以此调整歌曲的低频到高频，让每一次播放的声音，都一样细腻丰富。',
    icon: '/images/personalizedListening/icon_adaptive_eq.png',
    footnote: '13',
  },
  {
    id: 'personalized-spatial-audio',
    title: '个性化空间音频',
    description: '可借助 iPhone 上的原深感摄像头，基于你头部的几何结构来创建你的个人轮廓档案，为你量身打造沉浸感满满的音效体验。',
    icon: '/images/personalizedListening/icon_personalized_spatial_audio.png',
    footnote: '2',
  },
  {
    id: 'dynamic-head-tracking',
    title: '动态头部追踪',
    description: '无论是和朋友连网玩游戏，还是和同学远程讨论问题，你听到的声音仿佛就来自身边。',
    icon: '/images/personalizedListening/icon_dynamic_head_tracking.png',
    footnote: '2',
  },
];

export default function PersonalizedListeningSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={sectionRef}
      id="personalized-listening"
      className={`section section-personalized-listening no-pad-bottom ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-xl font-semibold text-apple-text-secondary uppercase tracking-wider mb-apple-4">
            个性化聆听体验
          </h2>
          <h3 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            只为取悦你双耳
          </h3>
        </div>

        {/* Intro Description */}
        <div className="text-center max-w-[680px] mx-auto mb-apple-16">
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            AirPods Pro 3 具备新一代自适应均衡功能，可根据你的耳形和佩戴贴合度，为你量身打造声音效果。个性化音量功能则会运用机器学习技术，了解你的聆听习惯，然后逐渐匹配你的偏好。
            <sup>
              <a href="#footnote-13" className="text-apple-link text-apple-xs">13</a>
            </sup>
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center mb-apple-16">
          <div className="w-full max-w-[980px] overflow-hidden rounded-apple-xl">
            <img
              src="/images/personalizedListening/personalized_listening.jpg"
              alt="一位舞者的耳朵里戴着 AirPods Pro 3，享受解放双手的聆听体验"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-apple-8 pb-apple-24">
          {personalizedFeatures.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="w-16 h-16 mx-auto mb-apple-4">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-apple-xl font-semibold text-apple-text-primary mb-apple-3">
                {feature.title}
              </h3>
              <p className="text-apple-base text-apple-text-secondary leading-relaxed">
                {feature.description}
                <sup>
                  <a href={`#footnote-${feature.footnote}`} className="text-apple-link text-apple-xs">
                    {feature.footnote}
                  </a>
                </sup>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}