import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'YouBlog',
  description: 'Turn youtube into blog post',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <link rel="manifest" href="/pwa/manifest.json" />
      <body>{children}</body>
    </html>
  );
}
