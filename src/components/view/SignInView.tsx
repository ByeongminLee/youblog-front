'use client';

import { Icon } from '../common/Icon';
import { SnsButton } from '../auth/SnsButton';
import { Text } from '../common/Text';
import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';
import { Nav } from '../common';

export const SignInView = () => {
  const { isMobile } = useResponsive();

  return (
    <div className="max-w-[430px] mx-auto desktop:max-w-[1440px]">
      {isMobile ? (
        <div className="flex flex-col h-dscreen justify-between">
          <div>
            <Nav isRight={true} />
          </div>
          <div className="h-2/3 px-4">
            <div className="flex flex-col">
              <Text variant="24px/Menu" className="mb-[12px]">
                {'영상으로\n블로그 시작하기'}
              </Text>
              <Icon name="logo" className="text-black w-[140px] mb-[16px]" />
              <Text variant="14px/regular" className="text-grey500 mb-[60px]">
                {'유블로그를 사용하기 위해\n로그인이 필요합니다'}
              </Text>
              <div className="flex flex-col gap-3">
                <SnsButton type="kakao" />
                <SnsButton type="google" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-dscreen justify-center">
          <div className="h-1/2 px-4">
            <div className="flex flex-col">
              <div className="flex mb-14">
                <div className="mr-[120px] py-4">
                  <Text variant="32px/bold">{'영상으로\n블로그 시작하기'}</Text>
                  <Icon name="logo" className="text-black w-[240px] m-4" />
                  <Text variant="14px/regular" className="text-grey500 mb-[60px]">
                    {'유블로그를 사용하기 위해\n로그인이 필요합니다'}
                  </Text>
                </div>
                <Image width={270} height={258} src={'/assets/imgs/auth_desktop.png'} alt="auth images" />
              </div>
              <div className="flex gap-4">
                <SnsButton type="kakao" className={'w-[320px]'} />
                <SnsButton type="google" className={'w-[320px]'} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
