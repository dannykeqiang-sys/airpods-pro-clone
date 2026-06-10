'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightIcon } from './icons';

interface ViewerTab {
  id: string;
  label: string;
  description: string;
  image: string;
  footnote: string;
}

const viewerTabs: ViewerTab[] = [
  {
    id: 'acoustic',
    label: '音质',
    description: '新的多孔声学架构让低音更沉、音场更广，每个音符声声入耳，人声格外清晰生动。',
    image: '/images/productViewer/closer_look_acoustic_a.jpg',
    footnote: '4',
  },
  {
    id: 'fit-feel',
    label: '佩戴体验',
    description: '新耳塞采用内旋设计，戴起来更稳更贴耳，新增的泡沫材料微粒填充层还提升了降噪效果。',
    image: '/images/productViewer/closer_look_fit_feel.jpg',
    footnote: '4',
  },
  {
    id: 'heart-rate',
    label: '心率传感功能',
    description: '内置我们迄今最小的心率传感器，能通过非可见光脉冲来精准跟测你各种锻炼的数据，从健身房撸铁到户外越野，都没问题。',
    image: '/images/productViewer/closer_look_heart_rate.jpg',
    footnote: '3',
  },
  {
    id: 'water-resistance',
    label: '防尘、抗汗、抗水',
    description: 'AirPods Pro 3 是首款达到 IP57 级别的 AirPods，不管是大汗淋漓的训练，还是突如其来的大雨，都能从容应对。',
    image: '/images/productViewer/closer_look_water_resistance.jpg',
    footnote: '6',
  },
  {
    id: 'touch-control',
    label: '触控操作',
    description: '用简单的手势就能轻松操控，轻按即播放，轻扫调音量。配合新的相机遥控器功能，拍照拍视频超方便顺手。',
    image: '/images/productViewer/closer_look_touch_control.jpg',
    footnote: '7',
  },
  {
    id: 'case',
    label: '充电盒',
    description: '得益于新一代超宽带技术，精确查找距离扩展至 1.5 倍，让 AirPods 的行踪尽在你掌握。',
    image: '/images/productViewer/closer_look_case.jpg',
    footnote: '8',
  },
];

export default function ProductViewerSection() {
  const [activeTab, setActiveTab] = useState(0);
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
      className={`section section-product-viewer no-pad-top staggered-start ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center mb-apple-16">
          <h2 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            定睛细看
          </h2>
          <a
            href="https://www.apple.com.cn/105/media/us/airpods-pro/2025/7acffb13-4adb-40b1-9393-8f1c99bc6c90/ar/airpods-pro.usdz"
            className="inline-flex items-center gap-apple-2 mt-apple-4 text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast"
          >
            <span>摆在眼前看看</span>
            <ArrowRightIcon size={9} />
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-apple-4 mb-apple-8">
          {viewerTabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-apple-4 py-apple-2 rounded-apple-lg text-apple-base font-medium transition-all duration-apple-fast ${
                idx === activeTab
                  ? 'bg-apple-text-primary text-apple-white'
                  : 'bg-transparent text-apple-text-secondary hover:text-apple-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Image */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-[640px] aspect-square overflow-hidden rounded-apple-xl">
            <img
              src={viewerTabs[activeTab].image}
              alt={viewerTabs[activeTab].label}
              className="w-full h-full object-cover transition-opacity duration-apple-normal"
              loading="lazy"
            />
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-apple-8 max-w-[680px] mx-auto">
          <p className="text-apple-lg text-apple-text-primary leading-relaxed">
            {viewerTabs[activeTab].description}
            <sup>
              <a
                href={`#footnote-${viewerTabs[activeTab].footnote}`}
                className="text-apple-link text-apple-xs"
              >
                {viewerTabs[activeTab].footnote}
              </a>
            </sup>
          </p>
        </div>
      </div>
    </section>
  );
}