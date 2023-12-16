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
      <HomeView onClick={handler} inputValue={inputValue} handleChangeInput={handleChangeInput} />
    </>
  );
}
