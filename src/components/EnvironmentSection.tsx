'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons';

interface EnvironmentCard {
  id: string;
  headline: string;
  icon: string;
}

const environmentCards: EnvironmentCard[] = [
  {
    id: 'recycling',
    headline: '制造采用的回收材料重量占比达 40%。',
    icon: '/images/environment/icon_recycling.png',
  },
  {
    id: 'electricity',
    headline: '生产制造采用 40% 可再生电力。',
    icon: '/images/environment/icon_electricity.png',
  },
  {
    id: 'package',
    headline: '紧凑包装让每次运输的货物量增加 25%。',
    icon: '/images/environment/icon_package.png',
  },
];

export default function EnvironmentSection() {
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
      className={`section section-environment background-alt staggered-start ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            AirPods Pro 3 与环境
          </h2>
          <a
            href="https://www.apple.com/environment/pdf/products/airpods/Apple_AirPods_Pro_3_PER_Sept2025.pdf"
            className="inline-flex items-center gap-apple-2 mt-apple-4 text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>阅读我们的《产品环境报告》(PDF) 了解详情</span>
            <ArrowRightIcon size={9} />
          </a>
        </div>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-apple-8 pb-apple-24">
          {environmentCards.map((card) => (
            <div key={card.id} className="text-center">
              <div className="w-16 h-16 mx-auto mb-apple-4">
                <img
                  src={card.icon}
                  alt=""
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-apple-xl font-semibold text-apple-text-primary">
                {card.headline}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}