'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons';

interface ContrastProduct {
  name: string;
  subtitle: string;
  price: string;
  image: string;
  features: ContrastFeature[];
  batteryHours: string;
  batteryDescription: string;
}

interface ContrastFeature {
  icon: string;
  label: string;
  available: boolean;
  footnote: string;
}

const pro3Features: ContrastFeature[] = [
  { icon: '/images/contrast/icon_active_noise_cancellation.png', label: '主动降噪效果相较初代 AirPods Pro 和 AirPods 4 (支持主动降噪)最高提升至 4 倍', available: true, footnote: '9' },
  { icon: '/images/contrast/icon_group_2.png', label: '自适应音频和通透模式', available: true, footnote: '11' },
  { icon: '/images/contrast/person_spatialaudio.png', label: '个性化空间音频支持动态头部追踪', available: true, footnote: '2' },
  { icon: '/images/contrast/icon_heart_rate.png', label: '心率传感功能锻炼时能测心率', available: true, footnote: '3' },
  { icon: '/images/contrast/icon_ear_badge_waveform_elevated.png', label: '降低高音量、对话增强和背景音', available: true, footnote: '' },
  { icon: '/images/contrast/chip_h2.png', label: '语音突显、嘿 Siri 和 Siri 互动方式', available: true, footnote: '10' },
];

const airpods4Features: ContrastFeature[] = [
  { icon: '/images/contrast/icon_active_noise_cancellation.png', label: '主动降噪', available: true, footnote: '11' },
  { icon: '/images/contrast/icon_group_2.png', label: '自适应音频和通透模式', available: true, footnote: '11' },
  { icon: '/images/contrast/person_spatialaudio.png', label: '个性化空间音频支持动态头部追踪', available: true, footnote: '2' },
  { icon: '/images/contrast/icon_heart_rate.png', label: '心率传感功能不适用', available: false, footnote: '' },
  { icon: '/images/contrast/icon_ear_badge_waveform_elevated.png', label: '降低高音量、对话增强和背景音不适用', available: false, footnote: '' },
  { icon: '/images/contrast/chip_h2.png', label: '语音突显、嘿 Siri 和 Siri 互动方式', available: true, footnote: '10' },
];

const products: ContrastProduct[] = [
  {
    name: 'AirPods Pro 3',
    subtitle: '入耳式主动降噪，入主新声代；具备心率传感功能，锻炼时能测心率。',
    price: 'RMB 1899',
    image: '/images/contrast/explore_airpods_pro_3_open.jpg',
    features: pro3Features,
    batteryHours: '8 小时',
    batteryDescription: '启用主动降噪时，单次充电聆听时间最长可达 8 小时',
  },
  {
    name: 'AirPods 4 (支持主动降噪)',
    subtitle: '音质、舒适性和噪声控制，再进阶。',
    price: 'RMB 1399',
    image: '/images/contrast/explore_airpods_4_anc_open.jpg',
    features: airpods4Features,
    batteryHours: '5 小时',
    batteryDescription: '单次充电聆听时间最长可达 5 小时(启用主动降噪时，最长可达 4 小时)',
  },
];

export default function ContrastSection() {
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
      className={`section section-contrast background-alt staggered-start ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            看看哪款 AirPods 适合你
          </h2>
          <a
            href="https://www.apple.com.cn/airpods/"
            className="inline-flex items-center gap-apple-2 mt-apple-4 text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast"
          >
            <span>探索全部 AirPods 机型</span>
            <ArrowRightIcon size={9} />
          </a>
        </div>

        {/* Product Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-apple-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="product-tile rounded-apple-xl bg-apple-white overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
                loading="lazy"
              />

              {/* Product Info */}
              <div className="p-apple-6">
                <h3 className="text-apple-xl font-semibold text-apple-text-primary mb-apple-2">
                  {product.name}
                </h3>
                <p className="text-apple-base text-apple-text-secondary mb-apple-4">
                  {product.subtitle}
                  <sup>
                    <a href="#footnote-3" className="text-apple-link text-apple-xs">3</a>
                  </sup>
                </p>
                <p className="text-apple-lg font-semibold text-apple-text-primary mb-apple-6">
                  {product.price}
                </p>

                {/* Features */}
                <div className="space-y-apple-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-apple-3">
                      <div className="w-8 h-8 flex-shrink-0">
                        <img
                          src={feature.icon}
                          alt=""
                          className={`w-full h-full object-contain ${!feature.available ? 'opacity-30' : ''}`}
                          loading="lazy"
                        />
                      </div>
                      <p className={`text-apple-sm leading-relaxed ${
                        feature.available ? 'text-apple-text-primary' : 'text-apple-text-tertiary'
                      }`}>
                        {feature.label}
                        {feature.footnote && (
                          <sup>
                            <a href={`#footnote-${feature.footnote}`} className="text-apple-link text-apple-xs">
                              {feature.footnote}
                            </a>
                          </sup>
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Battery */}
                <div className="mt-apple-6 pt-apple-4 border-t border-apple-divider">
                  <p className="text-apple-xl font-semibold text-apple-text-primary">
                    {product.batteryHours}
                  </p>
                  <p className="text-apple-sm text-apple-text-secondary mt-apple-1">
                    {product.batteryDescription}
                    <sup>
                      <a href="#footnote-5" className="text-apple-link text-apple-xs">
                        {product.name.includes('Pro') ? '5' : '19'}
                      </a>
                    </sup>
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-apple-6">
                  <a
                    href="#"
                    className="inline-flex items-center gap-apple-2 text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast"
                  >
                    <span>购买</span>
                    <ArrowRightIcon size={9} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compare CTA */}
        <div className="text-center mt-apple-12 pb-apple-24">
          <a
            href="https://www.apple.com.cn/airpods/compare/"
            className="inline-flex items-center gap-apple-2 text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast"
          >
            <span>比较各款 AirPods 机型</span>
            <ArrowRightIcon size={9} />
          </a>
        </div>
      </div>
    </section>
  );
}