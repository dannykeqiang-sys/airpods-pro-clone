/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* ── Apple AirPods Pro 设计 Token ── */

      colors: {
        // 核心色
        'apple-black': '#000000',
        'apple-text-primary': '#1D1D1F',
        'apple-white': '#FFFFFF',
        'apple-bg-light': '#FAFAFC',
        'apple-bg-secondary': '#F5F5F7',
        'apple-bg-tertiary': '#E1E1E3',
        'apple-text-secondary': '#6E6E73',
        'apple-text-tertiary': '#86868B',
        'apple-text-dark-secondary': '#5B5B61',
        'apple-text-dark': '#424245',
        'apple-text-darker': '#333336',

        // 功能色
        'apple-link': '#0071E3',
        'apple-link-hover': '#0066CC',
        'apple-green': '#00C866',
        'apple-purple': '#8668FF',
        'apple-orange': '#ED6300',
        'apple-teal': '#00A1B3',

        // 边框色
        'apple-border-light': 'rgba(232, 232, 237, 0.4)',
        'apple-border-medium': 'rgba(232, 232, 237, 0.72)',
        'apple-border-dark': 'rgba(210, 210, 215, 0.64)',
        'apple-divider': '#E8E8ED',

        // 遮罩色
        'apple-overlay-light': 'rgba(0, 0, 0, 0.16)',
        'apple-overlay-medium': 'rgba(0, 0, 0, 0.56)',
        'apple-overlay-heavy': 'rgba(0, 0, 0, 0.72)',
        'apple-overlay-dark': 'rgba(0, 0, 0, 0.8)',
        'apple-overlay-max': 'rgba(0, 0, 0, 0.88)',
        'apple-white-overlay-light': 'rgba(255, 255, 255, 0.16)',
        'apple-white-overlay-medium': 'rgba(255, 255, 255, 0.32)',
        'apple-white-overlay-heavy': 'rgba(255, 255, 255, 0.67)',
        'apple-white-overlay-max': 'rgba(255, 255, 255, 0.8)',
      },

      fontFamily: {
        'sf-pro': [
          '"SF Pro SC"',
          '"SF Pro Text"',
          '"PingFang SC"',
          '"Helvetica Neue"',
          '"Helvetica"',
          '"Arial"',
          'sans-serif',
        ],
        'sf-display': [
          '"SF Pro Display"',
          '"SF Pro SC"',
          '"PingFang SC"',
          'sans-serif',
        ],
        'sf-icons': ['"SF Pro Icons"'],
      },

      fontSize: {
        'apple-xs': ['12px', { lineHeight: '1.4' }],
        'apple-sm': ['14px', { lineHeight: '1.4' }],
        'apple-base': ['16px', { lineHeight: '1.4' }],
        'apple-lg': ['17px', { lineHeight: '1.5' }],
        'apple-xl': ['21px', { lineHeight: '1.4' }],
        'apple-2xl': ['24px', { lineHeight: '1.1' }],
        'apple-3xl': ['28px', { lineHeight: '1.1' }],
        'apple-4xl': ['32px', { lineHeight: '1.1' }],
        'apple-5xl': ['40px', { lineHeight: '1.05' }],
        'apple-6xl': ['48px', { lineHeight: '1.05' }],
        'apple-7xl': ['56px', { lineHeight: '1.05' }],
        'apple-8xl': ['80px', { lineHeight: '1.05' }],
        'apple-9xl': ['96px', { lineHeight: '1.05' }],
      },

      spacing: {
        'apple-1': '4px',
        'apple-2': '8px',
        'apple-3': '12px',
        'apple-4': '16px',
        'apple-5': '20px',
        'apple-6': '24px',
        'apple-8': '32px',
        'apple-10': '40px',
        'apple-12': '48px',
        'apple-16': '64px',
        'apple-20': '80px',
        'apple-24': '96px',
      },

      borderRadius: {
        'apple-sm': '4px',
        'apple-md': '8px',
        'apple-lg': '12px',
        'apple-xl': '16px',
        'apple-2xl': '20px',
      },

      boxShadow: {
        'apple-sm': '0 1px 2px rgba(0, 0, 0, 0.06)',
        'apple-md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'apple-xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
      },

      transitionDuration: {
        'apple-fast': '200ms',
        'apple-normal': '400ms',
        'apple-slow': '600ms',
        'apple-slower': '800ms',
      },

      transitionTimingFunction: {
        'apple-default': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'apple-in': 'cubic-bezier(0.42, 0, 1, 1)',
        'apple-out': 'cubic-bezier(0, 0, 0.58, 1)',
        'apple-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
        'apple-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },

      screens: {
        'apple-sm': '576px',
        'apple-md': '768px',
        'apple-lg': '1024px',
        'apple-xl': '1440px',
      },

      backgroundImage: {
        'gradient-white-to-secondary': 'linear-gradient(rgb(255, 255, 255), rgb(245, 245, 247))',
        'gradient-secondary-to-dark': 'linear-gradient(rgb(245, 245, 247) 85%, rgb(0, 0, 0) 0px)',
        'gradient-secondary-to-tertiary': 'linear-gradient(rgb(245, 245, 247), rgb(225, 225, 227))',
        'gradient-overlay-dark': 'linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.56))',
      },
    },
  },
  plugins: [],
};