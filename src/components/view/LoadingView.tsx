import Image from 'next/image';

import { Text } from '../common/Text';
import useResponsive from '@/hooks/useResponsive';

export const LoadingView = () => {
  const { isMobile } = useResponsive();

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col w-full">
          <Text variant="24px/Menu">{'포스팅을\n열심히 만들고 있어요.'}</Text>
          <div className="w-full flex justify-center my-[20px]">
            <Image src="/assets/imgs/loading.png" width={257} height={218} alt="loading" />
          </div>
          <Text variant="14px/regular" className="text-grey500">
            {'최대 1분 안에\n포스팅을 배달할께요.'}
          </Text>
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <Text variant="32px/bold">{'포스팅을\n열심히 만들고 있어요.'}</Text>
          <Text variant="16px/regular" className="text-grey500 my-[8px]">
            {'최대 1분 안에\n포스팅을 배달할께요.'}
          </Text>
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[1042px] h-[280px]">
              <Image
                src="/assets/imgs/loading_desktop.png"
                fill={true}
                alt="loading"
                className="relative"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
