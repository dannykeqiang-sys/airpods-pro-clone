'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function HearingHealthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState(0); // 0: startframe, 1: lifestyle, 2: enhanced

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
      const t1 = setTimeout(() => setPhase(1), 500);
      const t2 = setTimeout(() => setPhase(2), 1500);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [isVisible]);

  const heroImage = phase === 0
    ? '/images/hearingHealth/hearing_health_startframe.png'
    : phase === 1
      ? '/images/hearingHealth/hearing_health_lifestyle.png'
      : '/images/hearingHealth/hearing_health_lifestyle_enhanced.png';

  return (
    <section
      ref={sectionRef}
      id="hearing-health"
      className={`section section-hearing-health background-alt no-pad-bottom ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-xl font-semibold text-apple-text-secondary uppercase tracking-wider mb-apple-4">
            为听力护航
          </h2>
          <h3 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            强噪音，尽可能减轻。
          </h3>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center mb-apple-16">
          <div className="w-full max-w-[490px] aspect-square overflow-hidden rounded-apple-xl">
            <img
              src={heroImage}
              alt="AirPods Pro 3 听力健康功能展示"
              className="w-full h-full object-cover transition-opacity duration-apple-slow"
              loading="lazy"
            />
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-[680px] mx-auto pb-apple-24">
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            降低高音量功能，会尽可能为你减弱强噪音。对话增强功能，让你专注聆听面前说话者的声音。背景音功能，可播放海浪或下雨等舒缓的声音，以此来帮你弱化环境噪音。
          </p>
        </div>
      </div>
    </section>
  );
}