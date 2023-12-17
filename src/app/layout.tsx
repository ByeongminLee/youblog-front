'use client';

import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import { Providers } from '@/components/common';

const montserrat = Montserrat({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${montserrat.variable}`}>
      <title>youblog</title>
      <meta name="keywords" content="ai, post" />
      <meta name="description" content="인공지능으로 블로그 포스팅 만들기" />
      <link rel="manifest" href="/pwa/manifest.json" />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
