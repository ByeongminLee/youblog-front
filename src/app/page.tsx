'use client';

import { SplashView } from '@/components/view/SplashView';
import { HomeView } from '@/components/view/HomeView';
import { useRouter } from 'next/navigation';
import { useInput } from '@/hooks/useInput';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  const [inputValue, handleChangeInput, inputReset] = useInput({ youtubeUrl: '' });

  const handler = () => {
    if (!inputValue.youtubeUrl.includes('youtu')) return;

    const getYoutubeKey = (url: string): string | null => {
      const match1 = url.match(/(?:https:\/\/www\.youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/);

      const match2 = url.match(/(?:https:\/\/youtu\.be\/)([^?]+)/);

      return (match1 && match1[1]) || (match2 && match2[1]) || null;
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
