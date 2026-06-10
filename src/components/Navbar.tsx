'use client';

import React, { useState } from 'react';
import { AppleLogoIcon } from './icons';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: '商店', href: '/cn/shop/goto/store' },
  { label: 'Mac', href: '/mac/' },
  { label: 'iPad', href: '/ipad/' },
  { label: 'iPhone', href: '/iphone/' },
  { label: 'Watch', href: '/watch/' },
  { label: 'Vision', href: '/apple-vision-pro/' },
  { label: 'AirPods', href: '/airpods/' },
  { label: '家居', href: '/apple-home/' },
  { label: '娱乐', href: '/entertainment/' },
  { label: '配件', href: '/cn/shop/goto/buy_accessories' },
  { label: '技术支持', href: 'https://support.apple.com/zh-cn/' },
];

/**
 * Apple 风格全局导航栏
 * 
 * 规格（从 Chrome DevTools 精确提取）：
 * - 高度: 44px
 * - 背景: #FFFFFF (白色)
 * - 定位: absolute, z-index: 9999
 * - 字号: 12px, 字重: 400
 * - 链接颜色: #1D1D1F (深灰)
 * - hover 颜色: #0071E3 (蓝色)
 * - 包含 Apple Logo + 12 个导航项 + 搜索/购物袋图标
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-[9999] h-[44px] bg-white"
      role="navigation"
      aria-label="全局导航"
    >
      {/* 导航内容容器 */}
      <div className="mx-auto max-w-[980px] h-full flex items-center justify-between px-[22px]">
        {/* Apple Logo */}
        <a
          href="/"
          className="flex items-center text-apple-text-primary hover:text-apple-link transition-colors duration-apple-fast ease-apple-default"
          aria-label="Apple 首页"
        >
          <AppleLogoIcon size={18} />
        </a>

        {/* 导航链接 - 桌面端 */}
        <div className="hidden lg:flex items-center gap-[18px]">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[12px] font-normal leading-[1] text-apple-text-primary hover:text-apple-link transition-colors duration-apple-fast ease-apple-default whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* 搜索和购物袋图标 */}
        <div className="hidden lg:flex items-center gap-[18px]">
          {/* 搜索图标 */}
          <a
            href="/search"
            className="text-apple-text-primary hover:text-apple-link transition-colors duration-apple-fast ease-apple-default"
            aria-label="搜索 Apple"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M14.5 14.5L9.5 9.5M6.5 11.5C3.186 11.5 0.5 8.814 0.5 5.5C0.5 2.186 3.186 -0.5 6.5 -0.5C9.814 -0.5 12.5 2.186 12.5 5.5C12.5 8.814 9.814 11.5 6.5 11.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </a>

          {/* 购物袋图标 */}
          <a
            href="/cn/shop/goto/bag"
            className="text-apple-text-primary hover:text-apple-link transition-colors duration-apple-fast ease-apple-default"
            aria-label="购物袋"
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M11.5 4H2.5L1 14H13L11.5 4Z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M4.5 4V2C4.5 0.895 5.395 0 6.5 0H7.5C8.605 0 9.5 0.895 9.5 2V4"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </a>
        </div>

        {/* 移动端菜单按钮 */}
        <button
          className="lg:hidden text-apple-text-primary hover:text-apple-link transition-colors duration-apple-fast ease-apple-default"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M1 4H17M1 9H17M1 14H17" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          )}
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-apple-border-light">
          <div className="mx-auto max-w-[980px] px-[22px] py-[16px]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-[8px] text-[17px] font-normal text-apple-text-primary hover:text-apple-link transition-colors duration-apple-fast ease-apple-default"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}