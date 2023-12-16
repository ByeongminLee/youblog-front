'use client';

import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';
import { Button, Text } from '../common';
import { useRouter } from 'next/navigation';

export const ErrorView = () => {
  const { isMobile } = useResponsive();
  const router = useRouter();

  const handler = () => {
    router.push('/');
  };

  return isMobile ? (
    <div className="h-dscreen flex flex-col items-center justify-center">
      <Image src="/assets/imgs/404_mobile.png" width={240} height={240} alt="error" priority={true} />
      <Text variant="32px/bold" className="mb-[4px]">
        404
      </Text>
      <Text variant="20px/bold" className="text-center mb-[32px]">
        {'요청하신 기능을\n실행할 수 없습니다'}
      </Text>
      <Button className="w-fit bg-black50 rounded-[6px] py-[10px] px-[24px]" onClick={() => handler()}>
        <Text variant="14px/bold" className="text-white">
          포스팅으로 돌아가기
        </Text>
      </Button>
    </div>
  ) : (
    <div className="h-dscreen flex justify-between items-center px-4">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <Text className="font-bold text-[80px]">404</Text>
          <Text variant="32px/bold" className="mb-[40px]">
            {'요청하신 기능을 실행할 수 없습니다'}
          </Text>
          <Button className="w-fit bg-black50 rounded-[6px] py-[10px] px-[24px]" onClick={() => handler()}>
            <Text variant="14px/bold" className="text-white">
              포스팅으로 돌아가기
            </Text>
          </Button>
        </div>
      </div>
      <div className="w-1/2">
        <Image src="/assets/imgs/404_mobile.png" width={650} height={650} alt="error" priority={true} />
      </div>
    </div>
  );
};
