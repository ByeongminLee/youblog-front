import Image from 'next/image';
import { Text } from '../common';

export const ContentsChat = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="relative max-w-[320px] h-[320px] w-full">
        <Image src={'/assets/imgs/chat_desktop.png'} fill alt="ready" style={{ objectFit: 'contain' }} priority={true} />
      </div>
      <Text variant="20px/bold" className="mt-8 ">
        {'열심히 준비중이에요.\n조금만 기다려 주세요.'}
      </Text>
    </div>
  );
};
