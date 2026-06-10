'use client';

import React, { useEffect, useRef, useState } from 'react';

interface NoiseFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  footnote: string;
}

const noiseFeatures: NoiseFeature[] = [
  {
    id: 'low-noise-mic',
    title: '全新超低噪声麦克风。',
    description: 'AirPods Pro 3 能在你通话时降低背景噪声，同时突显对话声音。因此，不管你是在公交车上还是咖啡馆里，每次通话都能听得清清楚楚。',
    image: '/images/noiseControl/noise_control_low_noise_mic.jpg',
    footnote: '10',
  },
  {
    id: 'voice-isolation',
    title: '语音突显。',
    description: 'AirPods Pro 3 能在你通话时降低背景噪声，同时突显对话声音。因此，不管你是在公交车上还是咖啡馆里，每次通话都能听得清清楚楚。',
    image: '/images/noiseControl/noise_control_voice_isolation.jpg',
    footnote: '10',
  },
  {
    id: 'adaptive-audio',
    title: '自适应音频。',
    description: 'AirPods Pro 3 融合主动降噪功能和优化的通透模式，让你和周围的声音听起来更加生动自然；同时它还会根据所处环境智能调整，优先让你听清最想听到的声音。',
    image: '/images/noiseControl/noise_control_adaptive_audio.jpg',
    footnote: '11',
  },
  {
    id: 'conversation-awareness',
    title: '对话感知。',
    description: '当 AirPods Pro 3 感知到你在和身边的人说话时，会自动调低播放音量，并在对话结束后马上恢复音量。',
    image: '/images/noiseControl/noise_control_conversation_awareness.webp',
    footnote: '12',
  },
];

export default function NoiseControlSection() {
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
      const timer = setTimeout(() => setHeroVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`section section-noise-control no-pad-top no-pad-bottom bg-gradient-white-to-secondary ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-xl font-semibold text-apple-text-secondary uppercase tracking-wider mb-apple-4">
            智能噪声控制
          </h2>
          <h3 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            天籁，不入耳。
          </h3>
        </div>

        {/* Hero Image with Ripple Animation */}
        <div className="relative flex justify-center mb-apple-8">
          <div className="w-full max-w-[980px] aspect-square overflow-hidden">
            <img
              src={heroVisible
                ? '/images/noiseControl/noise_control_endframe.png'
                : '/images/noiseControl/noise_control_startframe.png'}
              alt="圆形音浪涟漪；位于其中心位置的文字显示：智能噪声控制。非天籁，不入耳。"
              className="w-full h-full object-cover transition-opacity duration-apple-slower"
              loading="lazy"
            />
          </div>
        </div>

        {/* Intro Description */}
        <div className="text-center max-w-[680px] mx-auto mb-apple-16">
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            AirPods Pro 3 可运用先进的计算音频技术，消除更多的环境噪声，助你随时保持专注或自在放空。全新耳塞提供五种尺寸选择，其中包括 XXS 号，耳塞的硅胶体中还加入薄薄的柔软泡沫材料层，让声学表现更出色。
            <sup>
              <a href="#footnote-9" className="text-apple-link text-apple-xs">9</a>
            </sup>
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-apple-6">
          {noiseFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group rounded-apple-xl overflow-hidden bg-apple-white"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="p-apple-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}