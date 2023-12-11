'use client';
import { Splash } from '@/components/Splash';
import { Home } from '@/components/pages/Home';
import { Loading } from '@/components/pages/Loading';
import { useState } from 'react';
import { Nav } from '@/components/Nav';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/article');
    }, 2500);
  };

  return (
    <>
      <Splash />
      <main className="px-4 border h-full max-h-screen overflow-hidden">
        <div className="flex flex-col h-screen justify-between">
          <div>
            <Nav isRight={true} />
          </div>
          <div className="h-1/2">{isLoading ? <Loading /> : <Home onClick={handler} />}</div>
          <div />
        </div>
      </main>
    </>
  );
}
