'use client';

import React, { useEffect, useRef, useState } from 'react';
import { NotificationIcon, AudioSharingIcon, ArrowRightIcon } from './icons';

interface MagicalSlide {
  id: string;
  subtitle: string;
  description: string;
  image: string;
  footnote: string;
}

const magicalSlides: MagicalSlide[] = [
  {
    id: 'controls',
    subtitle: '通过简单的触控操作',
    description: '就能调高和调低音量、跳播曲目等。而有了全新的相机遥控器功能，即使 iPhone 不在手边，也可操控它录视频或拍照片。',
    image: '/images/magical/magical_experience_controls.jpg',
    footnote: '7',
  },
  {
    id: 'siri',
    subtitle: '有了 Siri，',
    description: '就能问路线、打电话或查日程，不需要掏出 iPhone 来操作。',
    image: '/images/magical/connectivity_endframe.jpg',
    footnote: '13',
  },
  {
    id: 'setup',
    subtitle: '要设置 AirPods Pro 3，',
    description: '只需将耳机靠近 iPhone，然后按照屏幕提示操作即可。自动切换功能可将 AirPods 顺畅连接到你正在聆听的设备上，你只要按下播放就好。',
    image: '/images/magical/connectivity_startframe.jpg',
    footnote: '14',
  },
];

export default function MagicalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

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

  // Auto-cycle slides
  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % magicalSlides.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`section section-magical background-alt no-pad-bottom staggered-start ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-xl font-semibold text-apple-text-secondary uppercase tracking-wider mb-apple-4">
            使用体验
          </h2>
          <h3 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            绝妙不绝于耳
          </h3>
        </div>

        {/* Intro Description */}
        <div className="text-center max-w-[680px] mx-auto mb-apple-16">
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            AirPods Pro 3 绝技满身，为普普通通的日常生活带来非凡精彩。从全面重构的声学架构，到超便利的相机控制功能，这款 AirPods 不止悦耳，更是妙用无穷。
            <sup>
              <a href="#footnote-7" className="text-apple-link text-apple-xs">7</a>
            </sup>
          </p>
        </div>

        {/* Fade Gallery */}
        <div className="relative mb-apple-8">
          {magicalSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`transition-opacity duration-apple-normal ${
                idx === activeSlide ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.subtitle}
                className="w-full h-auto object-cover rounded-apple-xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-apple-8 bg-gradient-overlay-dark rounded-b-apple-xl">
                <h4 className="text-apple-xl font-semibold text-apple-white mb-apple-2">
                  {slide.subtitle}
                </h4>
                <p className="text-apple-base text-apple-white-overlay-heavy leading-relaxed">
                  {slide.description}
                  <sup>
                    <a href={`#footnote-${slide.footnote}`} className="text-apple-link text-apple-xs">
                      {slide.footnote}
                    </a>
                  </sup>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Siri Demo */}
        <div className="text-center mb-apple-16">
          <p className="text-apple-lg text-apple-text-primary font-medium italic">
            嘿 Siri，给苏宇铃发信息我在路上了
          </p>
        </div>

        {/* Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-apple-8 pb-apple-24">
          {/* 播报通知 */}
          <div className="flex items-start gap-apple-4 p-apple-6 rounded-apple-xl bg-apple-white">
            <div className="w-12 h-12 flex-shrink-0">
              <NotificationIcon size={48} className="text-apple-text-primary" />
            </div>
            <div>
              <h3 className="text-apple-xl font-semibold text-apple-text-primary mb-apple-2">
                播报通知。
              </h3>
              <p className="text-apple-base text-apple-text-secondary leading-relaxed">
                Siri 可读出你收到的信息及提醒，你只需说句话就能做出回应。而借助 Siri 互动方式，你用点头或摇头这种直观的头部动作，就能接电话、回信息，或者是忽略电话和信息。
                <sup>
                  <a href="#footnote-15" className="text-apple-link text-apple-xs">15</a>
                </sup>
              </p>
            </div>
          </div>

          {/* 音频共享 */}
          <div className="flex items-start gap-apple-4 p-apple-6 rounded-apple-xl bg-apple-white">
            <div className="w-12 h-12 flex-shrink-0">
              <AudioSharingIcon size={48} className="text-apple-text-primary" />
            </div>
            <div>
              <h3 className="text-apple-xl font-semibold text-apple-text-primary mb-apple-2">
                音频共享。
              </h3>
              <p className="text-apple-base text-apple-text-secondary leading-relaxed">
                让你轻松与朋友分享你正在观看或聆听的内容，只需要将他们的 AirPods 靠近你连着的 iPhone 或 iPad 就行。
                <sup>
                  <a href="#footnote-16" className="text-apple-link text-apple-xs">16</a>
                </sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}