'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRightIcon } from './icons';

interface IncentiveCard {
  id: string;
  label: string;
  headline: string;
  body: string;
  image: string;
}

const incentiveCards: IncentiveCard[] = [
  {
    id: 'engrave',
    label: '免费镌刻服务',
    headline: '给你的新 AirPods 加点个性。',
    body: '表情符号、名字、缩写和数字随心混搭，让它专属于你。',
    image: '/images/incentive/watch_personalize_short.jpg',
  },
  {
    id: 'delivery',
    label: '送货和取货',
    headline: '可免费送货，也可到店取货。',
    body: '所有订单均可享免费送货。部分订单可选择免费的三小时快送，或亲自到店取货。',
    image: '/images/incentive/delivery_pickup_short.jpg',
  },
  {
    id: 'financing',
    label: '分期付款服务',
    headline: '分期付款方案任你选。',
    body: '各种方便的分期付款方案，为你更添轻松。支付宝新增多家银行支持分期，最长可享 24 个月免息分期。',
    image: '/images/incentive/buy.jpg',
  },
  {
    id: 'specialist',
    label: '导购',
    headline: 'Specialist 专家协助选购。',
    body: '无论线上还是在 Apple Store 零售店，我们都能帮你找到心仪的产品，并解答你的各种疑问。',
    image: '/images/incentive/iphone_specialist_short.jpg',
  },
  {
    id: 'app',
    label: 'Apple Store App',
    headline: '专属于你的购物体验。',
    body: '更个性化的购物方式，尽在这款 app。',
    image: '/images/incentive/apple_store_app_short.jpg',
  },
];

export default function IncentiveSection() {
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
      className={`section section-incentive background-alt no-pad-bottom staggered-start ${isVisible ? 'staggered-visible' : ''}`}
    >
      <div className="max-w-[980px] mx-auto px-apple-6">
        {/* Section Header */}
        <div className="text-center pt-apple-24 pb-apple-16">
          <h2 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight">
            在 Apple 购买 AirPods，好处多多。
          </h2>
          <a
            href="https://www.apple.com.cn/cn/shop/goto/accessories/all_accessories/headphones_speakers"
            className="inline-flex items-center gap-apple-2 mt-apple-4 text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast"
          >
            <span>选购 AirPods</span>
            <ArrowRightIcon size={9} />
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-apple-4 pb-apple-24">
          {incentiveCards.map((card) => (
            <div
              key={card.id}
              className="group rounded-apple-xl overflow-hidden bg-apple-white hover:shadow-apple-md transition-shadow duration-apple-fast"
            >
              <img
                src={card.image}
                alt={card.label}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="p-apple-4">
                <h3 className="text-apple-sm font-semibold text-apple-text-secondary uppercase tracking-wider mb-apple-2">
                  {card.label}
                </h3>
                <p className="text-apple-lg font-semibold text-apple-text-primary mb-apple-2">
                  {card.headline}
                </p>
                <p className="text-apple-sm text-apple-text-secondary leading-relaxed">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}