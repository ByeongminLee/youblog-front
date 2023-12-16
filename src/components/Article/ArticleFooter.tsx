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
    alert('test');
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
