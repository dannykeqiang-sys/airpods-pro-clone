'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PlayIcon, ArrowRightIcon } from './icons';

interface HighlightItem {
  id: number;
  caption: string;
  image: string;
  footnote: string;
}

const highlights: HighlightItem[] = [
  {
    id: 1,
    caption: '打造高清音质，奏响 3D 音效，营造非同凡响的空间听觉体验。',
    image: '/images/highlights/highlights_noise_cancellation.jpg',
    footnote: '2',
  },
  {
    id: 2,
    caption: '全新心率传感功能，跟测锻炼时的心率和卡路里。',
    image: '/images/highlights/highlights_heart_rate.webp',
    footnote: '3',
  },
  {
    id: 3,
    caption: '从内到外设计一新，入耳更稳更贴合，声学表现更出色。',
    image: '/images/highlights/highlights_acoustic.jpg',
    footnote: '4',
  },
  {
    id: 4,
    caption: '启用主动降噪时，充满一次电，就能最多畅听 8 小时。',
    image: '/images/highlights/highlights_battery_endframe.jpg',
    footnote: '5',
  },
];

export default function HighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section section-highlights staggered-start ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center mb-apple-12">
          <h2 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            先刷重点
          </h2>
          <a
            href="#film"
            className="inline-flex items-center gap-apple-2 mt-apple-4 text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast"
          >
            <PlayIcon size={56} className="text-apple-link" />
            <span className="text-apple-xl">观看影片</span>
          </a>
        </div>

        {/* Gallery */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-apple-xl">
            {highlights.map((item, idx) => (
              <div
                key={item.id}
                className={`transition-opacity duration-apple-normal ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Caption */}
          <div className="mt-apple-6 text-center">
            {highlights.map((item, idx) => (
              <p
                key={item.id}
                className={`caption pin-offset text-apple-xl text-apple-text-primary transition-opacity duration-apple-normal ${
                  idx === activeIndex ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                {item.caption}
                <sup>
                  <a href={`#footnote-${item.footnote}`} className="text-apple-link text-apple-xs">
                    {item.footnote}
                  </a>
                </sup>
              </p>
            ))}
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center gap-apple-3 mt-apple-8">
            {highlights.map((_, idx) => (
              <a
                key={idx}
                href={`#highlights-gallery-item-${idx + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveIndex(idx);
                }}
                className={`dotnav-link w-apple-3 h-apple-3 rounded-full transition-all duration-apple-fast ${
                  idx === activeIndex
                    ? 'bg-apple-text-primary scale-100'
                    : 'bg-apple-text-tertiary scale-75 hover:bg-apple-text-secondary'
                }`}
                aria-label={`切换到第 ${idx + 1} 个亮点`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}