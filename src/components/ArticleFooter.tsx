'use client';

import { useRouter } from 'next/navigation';
import { InputButton } from './InputButton';
import { Text } from './Text';

export const ArticleFooter = () => {
  const router = useRouter();
  const handler = () => {
    alert('test');
  };

  return (
    <div className="px-4 py-8 bg-grey50 mb-10">
      <Text variant="20px/bold">{'새로운 영상도\n궁금하다면?'}</Text>
      <InputButton className={'mb-[32px]'} onClick={handler} />
    </div>
  );
};
