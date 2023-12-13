'use client';
import { SplashView } from '@/components/view/SplashView';
import { HomeView } from '@/components/view/HomeView';
import { LoadingView } from '@/components/view/LoadingView';
import { useState } from 'react';
import { Nav } from '@/components/common/Nav';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handler = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.replace('/article');
    }, 2500);
  };

  return (
    <>
      <SplashView />
      <main className="h-full max-h-dscreen overflow-hidden max-w-[430px] mx-auto desktop:max-w-[1440px]">
        <div className="flex flex-col h-dscreen justify-between">
          <div>
            <Nav isRight={true} />
          </div>
          <div className="h-1/2 px-4">{isLoading ? <LoadingView /> : <HomeView onClick={handler} />}</div>
          <div />
        </div>
      </main>
    </>
  );
}
