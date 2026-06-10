import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AirPods Pro 3 - Apple (中国大陆)',
  description: 'AirPods Pro 3，主动降噪升至两倍，倍加悦耳。全新超低噪声麦克风、自适应音频、心率传感功能、个性化空间音频。',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'AirPods Pro 3 - Apple (中国大陆)',
    description: 'AirPods Pro 3，主动降噪升至两倍，倍加悦耳。',
    type: 'website',
    locale: 'zh_CN',
    siteName: 'Apple',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="font-sf-pro antialiased">
        {children}
      </body>
    </html>
  );
}