import Image from 'next/image';

import { Text } from '../common/Text';
import useResponsive from '@/hooks/useResponsive';

export const LoadingView = () => {
  const { isMobile } = useResponsive();

  return (
    <LoadingViewContainer>
      {isMobile ? (
        <div className="flex flex-col w-full">
          <Text variant="24px/Menu">{'포스팅을\n열심히 만들고 있어요.'}</Text>
          <div className="w-full flex justify-center my-[20px]">
            <Image src="/assets/imgs/loading_mobile.png" width={240} height={240} alt="loading" priority={true} />
          </div>
          <Text variant="14px/regular" className="text-grey500">
            {'최대 1분 안에\n포스팅을 배달할께요.'}
          </Text>
        </div>
      ) : (
        <div className="flex w-full justify-between">
          <div className="flex flex-col w-1/2 mt-[120px]">
            <Text variant="32px/bold">{'포스팅을\n열심히 만들고 있어요.'}</Text>
            <Text variant="16px/regular" className="text-grey500 my-[8px]">
              {'최대 1분 안에 포스팅을 배달할께요.'}
            </Text>
          </div>
          <div className="w-1/2">
            <Image src="/assets/imgs/loading_desktop.png" width={650} height={650} priority={true} alt="imgs" />
          </div>
        </div>
      )}
    </LoadingViewContainer>
  );
};

const LoadingViewContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full max-h-dscreen overflow-hidden max-w-[430px] mx-auto desktop:max-w-[1440px]">
      <div className="flex flex-col h-dscreen justify-between">
        <div />
        <div className="h-1/2 px-4">{children}</div>
        <div />
      </div>
    </main>
  );
};
