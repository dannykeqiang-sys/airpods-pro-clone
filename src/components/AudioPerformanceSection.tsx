'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function AudioPerformanceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState(0); // 0: startframe, 1: endframe, 2: guts

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
    ? '/images/audioPerformance/design_startframe.png'
    : phase === 1
      ? '/images/audioPerformance/design_endframe.png'
      : '/images/audioPerformance/audio_airpods_pro_guts.png';

  return (
    <section
      ref={sectionRef}
      className={`section section-audio-performance background-alt staggered-start ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-xl font-semibold text-apple-text-secondary uppercase tracking-wider mb-apple-4">
            音频性能
          </h2>
          <h3 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            好声音，由科技领衔。
          </h3>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center mb-apple-16">
          <div className="w-full max-w-[640px] aspect-square overflow-hidden rounded-apple-xl">
            <img
              src={heroImage}
              alt="AirPods Pro 3 音频性能展示"
              className="w-full h-full object-cover transition-opacity duration-apple-slow"
              loading="lazy"
            />
          </div>
        </div>

        {/* Descriptions */}
        <div className="text-center max-w-[680px] mx-auto space-y-apple-6">
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            AirPods Pro 3 由 Apple 设计的 H2 芯片强势驱动，声学架构全面重塑，无论你想畅听动感好歌，还是每周和家人电话聊天，它都能为你带来十足震撼的环绕声体验。
          </p>
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            新的多孔声学架构可以更精准地控制气流，通过直指耳道的内向式麦克风传送声音，带来更深沉的低音和清晰生动的人声表现，营造更广阔的音场，让每一个音符都听得真真切切。
          </p>
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            定制的驱动单元和放大器配合 H2 芯片，可打造高清 3D 音效，也能让播放时失真度超低。
            <sup>
              <a href="#footnote-2" className="text-apple-link text-apple-xs">2</a>
            </sup>
          </p>
        </div>
      </div>
    </section>
  );
}