'use client';
import clipboardCopy from '@/utils/clipboardCopy';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';
import { Text } from '../common/Text';

export const CopyPost = ({ contents, subSelected }: { contents: any; subSelected: string }) => {
  return (
    <Button
      onClick={() => clipboardCopy(contents[subSelected])}
      className="rounded border border-grey200 px-3 py-2 w-fit flex justify-center items-center"
    >
      <Icon name="post" className="w-5 h-5 mr-2" />
      <Text variant="14px/regular">포스팅 복사하기</Text>
    </Button>
  );
};
