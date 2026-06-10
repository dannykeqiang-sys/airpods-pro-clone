'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon, RecyclingIcon, PrivacyIcon, AccessibilityIcon } from './icons';

interface ValueCard {
  id: string;
  headline: string;
  body: string;
  ctaText: string;
  ctaHref: string;
  iconType: 'recycling' | 'privacy' | 'accessibility';
}

const valueCards: ValueCard[] = [
  {
    id: 'environment',
    headline: '我们的计划，和我们的产品一样突破创新。',
    body: '我们致力于到 2030 年实现整体碳足迹净零排放的目标。',
    ctaText: '进一步了解环境责任',
    ctaHref: 'https://www.apple.com.cn/environment/',
    iconType: 'recycling',
  },
  {
    id: 'privacy',
    headline: '力保个人信息安全，这很 Apple。',
    body: '隐私是一项基本人权。我们设计的每一款产品和服务都力求保护你的数据安全。',
    ctaText: '进一步了解隐私安全',
    ctaHref: 'https://www.apple.com.cn/privacy/',
    iconType: 'privacy',
  },
  {
    id: 'accessibility',
    headline: '种种创新，为辅助使用而设计。',
    body: '我们的产品和服务为每一个人而设计，众多内置功能可协助你以适合自己的方式，尽情投入喜欢的事。',
    ctaText: '进一步了解辅助功能',
    ctaHref: 'https://www.apple.com.cn/accessibility/',
    iconType: 'accessibility',
  },
];

const iconMap = {
  recycling: RecyclingIcon,
  privacy: PrivacyIcon,
  accessibility: AccessibilityIcon,
};

export default function ValuesSection() {
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
      className={`section section-values background-alt no-pad-top staggered-start ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            我们的价值观，为我们导航。
          </h2>
        </div>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-apple-8 pb-apple-24">
          {valueCards.map((card) => {
            const IconComponent = iconMap[card.iconType];
            return (
              <div key={card.id} className="text-center">
                <div className="w-16 h-16 mx-auto mb-apple-4">
                  <IconComponent size={48} className="text-apple-text-primary" />
                </div>
                <h3 className="text-apple-xl font-semibold text-apple-text-primary mb-apple-3">
                  {card.headline}
                </h3>
                <p className="text-apple-base text-apple-text-secondary leading-relaxed mb-apple-4">
                  {card.body}
                </p>
                <a
                  href={card.ctaHref}
                  className="inline-flex items-center gap-apple-2 text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast"
                >
                  <span>{card.ctaText}</span>
                  <ArrowRightIcon size={9} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}