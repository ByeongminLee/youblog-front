'use client';

import { SplashView } from '@/components/view/SplashView';
import { HomeView } from '@/components/view/HomeView';
import { Nav } from '@/components/common/Nav';
import { useRouter } from 'next/navigation';
import { useInput } from '@/hooks/useInput';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  const [inputValue, handleChangeInput, inputReset] = useInput({ youtubeUrl: '' });

  const handler = () => {
    if (!inputValue.youtubeUrl.includes('www.youtube.com')) return;

    const getYoutubeKey = (url: string) => {
      return url.replace('https://www.youtube.com/watch?v=', '');
    };

    router.push('/article?key=' + getYoutubeKey(inputValue.youtubeUrl));
  };

  useEffect(() => {
    if (inputValue.youtubeUrl === '') return;
    inputReset('youtubeUrl');
  }, []);

  return (
    <>
      <SplashView />
      <main className="h-full max-h-dscreen overflow-hidden max-w-[430px] mx-auto desktop:max-w-[1440px]">
        <div className="flex flex-col h-dscreen justify-between">
          <div>
            <Nav isRight={true} />
          </div>
          <div className="h-1/2 px-4">
            <HomeView onClick={handler} inputValue={inputValue} handleChangeInput={handleChangeInput} />
          </div>
          <div />
        </div>
      </main>
    </>
  );
}
