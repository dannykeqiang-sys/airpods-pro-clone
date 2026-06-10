'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons';

export default function BatterySection() {
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
      id="battery"
      className={`section section-battery background-alt no-pad-bottom ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-xl font-semibold text-apple-text-secondary uppercase tracking-wider mb-apple-4">
            超长电池续航
          </h2>
          <h3 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            从早到晚，都能畅快听。
          </h3>
        </div>

        {/* Intro Description */}
        <div className="text-center max-w-[680px] mx-auto mb-apple-16">
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            MagSafe 充电盒满载实用功能，比如内置的扬声器和更强的精确查找功能，可助你实时追踪 AirPods Pro 3 的位置。而现在充满一次电，就能陪你从早忙到晚，加加班也没问题。
            <sup>
              <a href="#footnote-17" className="text-apple-link text-apple-xs">17</a>
            </sup>
          </p>
        </div>

        {/* Battery Data */}
        <div className="text-center mb-apple-16">
          <div className="inline-flex items-baseline gap-apple-2">
            <span className="text-apple-8xl font-semibold text-apple-text-primary tracking-tight">
              8
            </span>
            <span className="text-apple-3xl font-semibold text-apple-text-primary">
              小时
            </span>
          </div>
          <p className="text-apple-base text-apple-text-secondary mt-apple-4">
            启用主动降噪时，单次充电聆听时间最长可达 8 小时
            <sup>
              <a href="#footnote-5" className="text-apple-link text-apple-xs">5</a>
            </sup>
          </p>
          <p className="text-apple-base text-apple-text-tertiary mt-apple-2">
            比 AirPods Pro 2 长 2 小时
          </p>
        </div>

        {/* Find My Section */}
        <div className="text-center mb-apple-16">
          <h2 className="text-apple-3xl font-semibold text-apple-text-primary tracking-tight mb-apple-4">
            查找功能支持精确查找
          </h2>
          <p className="text-apple-lg text-apple-text-secondary leading-relaxed max-w-[680px] mx-auto">
            轻轻松松就能查看你的 AirPods Pro 在哪里。充电盒采用新一代超宽带技术，精确查找距离扩展至 1.5 倍；它还自带扬声器，就算掉进了沙发缝里，也好找到。
            <sup>
              <a href="#footnote-8" className="text-apple-link text-apple-xs">8</a>
            </sup>
          </p>
        </div>

        {/* Find My Image */}
        <div className="relative flex justify-center pb-apple-24">
          <div className="w-full max-w-[640px] overflow-hidden rounded-apple-xl">
            <img
              src="/images/battery/find_my.webp"
              alt="AirPods Pro 3 精确查找功能"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}