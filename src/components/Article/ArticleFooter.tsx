'use client';

import { useRouter } from 'next/navigation';
import { InputButton } from '../common/InputButton';
import { Text } from '../common/Text';
import tw from '@/utils/tw';
import { useInput } from '@/hooks/useInput';

export const ArticleFooter = ({ className }: { className?: string }) => {
  const router = useRouter();

  const [inputValue, handleChangeInput, inputReset] = useInput({ youtubeUrl: '' });

  const handler = () => {
    if (!inputValue.youtubeUrl.includes('youtu')) return;

    const getYoutubeKey = (url: string): string | null => {
      const match1 = url.match(/(?:https:\/\/www\.youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/);

      const match2 = url.match(/(?:https:\/\/youtu\.be\/)([^?]+)/);

      return (match1 && match1[1]) || (match2 && match2[1]) || null;
    };

    router.replace(`/article?key=${getYoutubeKey(inputValue.youtubeUrl)}`);
  };

  return (
    <div className={tw('px-4 py-8 bg-grey50 ', className)}>
      <Text variant="20px/bold">{'새로운 영상도\n궁금하다면?'}</Text>
      <InputButton
        className={tw('mt-4 mb-[32px]', '[&>input]:bg-white')}
        onClick={handler}
        inputValue={inputValue}
        handleChangeInput={handleChangeInput}
      />
    </div>
  );
};
