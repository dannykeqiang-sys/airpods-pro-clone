'use client';

import React from 'react';
import { ArrowRightIcon } from './icons';

interface IndexLink {
  text: string;
  href: string;
}

interface IndexColumn {
  title: string;
  links: IndexLink[];
}

const indexColumns: IndexColumn[] = [
  {
    title: '探索 AirPods',
    links: [
      { text: '探索全部 AirPods 机型', href: 'https://www.apple.com.cn/airpods/' },
      { text: 'AirPods 4', href: 'https://www.apple.com.cn/airpods-4/' },
      { text: 'AirPods Pro 3', href: 'https://www.apple.com.cn/airpods-pro/' },
      { text: 'AirPods Max 2', href: 'https://www.apple.com.cn/airpods-max/' },
      { text: 'AirPods 机型比较', href: 'https://www.apple.com.cn/airpods/compare/' },
    ],
  },
  {
    title: '选购 AirPods',
    links: [
      { text: '选购 AirPods', href: 'https://www.apple.com.cn/cn/shop/goto/accessories/all_accessories/headphones_speakers' },
      { text: 'AirPods 配件', href: 'https://www.apple.com.cn/cn/shop/goto/airpods/accessories' },
    ],
  },
  {
    title: 'AirPods 相关',
    links: [
      { text: 'AirPods 支持', href: 'https://support.apple.com/zh-cn/airpods' },
      { text: 'AppleCare', href: 'https://www.apple.com.cn/applecare/?filter=headphones' },
      { text: 'Apple Music', href: 'https://www.apple.com.cn/apple-music/' },
    ],
  },
];

export default function IndexSection() {
  return (
    <section className="section section-index bg-apple-bg-light">
      <div className="max-w-[980px] mx-auto px-apple-6 py-apple-24">
        {/* Title */}
        <h2 className="text-apple-5xl font-semibold text-apple-text-primary tracking-tight mb-apple-16">
          AirPods
        </h2>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-apple-8">
          {indexColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-apple-xl font-semibold text-apple-text-primary mb-apple-4">
                {column.title}
              </h3>
              <ul className="space-y-apple-3">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-apple-2 text-apple-link hover:text-apple-link-hover transition-colors duration-apple-fast"
                    >
                      <span>{link.text}</span>
                      <ArrowRightIcon size={9} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}