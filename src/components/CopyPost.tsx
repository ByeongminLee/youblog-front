'use client';
import clipboardCopy from '@/utils/clipboardCopy';
import { Button } from './Button';
import { Icon } from './Icon';
import { Text } from './Text';

export const CopyPost = ({ contents }: { contents: string }) => {
  return (
    <Button onClick={() => clipboardCopy(contents)} className="rounded border border-grey200 px-3 py-2 w-fit">
      <Icon name="post" className="w-5 h-5 mr-2" />
      <Text variant="14px/regular">포스팅 복사하기</Text>
    </Button>
  );
};
