'use client';
import { ArticleView, ErrorView, LoadingView } from '@/components/view';
import { fetcher } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const key = searchParams.get('key');

  const {
    isLoading,
    data: articleData,
    error,
  } = useQuery({
    queryKey: ['article'],
    queryFn: () => fetcher('/post', 'POST', JSON.stringify({ youtubeUrl: getYoutubeURL(key ?? '') })),
    enabled: !!key,
  });

  const getYoutubeURL = (key: string) => {
    return 'https://www.youtube.com/watch?v=' + key;
  };

  const getYoutubeEmbed = (key: string) => {
    return 'https://www.youtube.com/embed/' + key;
  };

  useEffect(() => {
    if (!key) alert('잘못된 접근입니다.');
  }, [key]);

  if (isLoading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView />;
  }

  return (
    <ArticleView
      data={{
        title: 'test',
        url: getYoutubeEmbed(key ?? ''),
        contents: articleData?.content,
      }}
    />
  );
}
