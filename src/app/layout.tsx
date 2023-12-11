import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';

export const metadata: Metadata = {
  title: 'YouBlog',
  description: 'Turn youtube into blog post',
};

const montserrat = Montserrat({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${montserrat.variable}`}>
      <link rel="manifest" href="/pwa/manifest.json" />
      <body>
        <div className="max-w-[430px] mx-auto ">{children}</div>
      </body>
    </html>
  );
}
