import useResponsive from '@/hooks/useResponsive';
import { Icon } from '../common/Icon';
import { InputButton } from '../common/InputButton';
import { Text } from '../common/Text';
import Image from 'next/image';
import { Nav } from '../common';

interface HomeViewProps {
  onClick: () => void;
  inputValue: { [key: string]: string };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HomeView = ({ onClick, inputValue, handleChangeInput }: HomeViewProps) => {
  const { isMobile } = useResponsive();

  return (
    <>
      {isMobile ? (
        <main className="h-full max-h-dscreen overflow-hidden max-w-[430px] mx-auto desktop:max-w-[1440px]">
          {false ? <Nav isRight={true} /> : <div className="h-[120px]" />}

          <div className="flex flex-col">
            <div className="h-1/2 px-4">
              <div className="flex mt-8 mb-[12px] justify-between">
                <div className="flex justify-end flex-col h-full">
                  <Text variant="24px/Menu">{'영상으로\n블로그 시작하기'}</Text>
                </div>
                <Image src={'/assets/imgs/home_mobile.png'} width={160} height={160} alt="img" />
              </div>

              <Icon name="logo" className="text-black w-[140px] mb-[40px]" />
              <InputButton className={'mb-[32px]'} onClick={onClick} inputValue={inputValue} handleChangeInput={handleChangeInput} />
              <Text variant="14px/regular" className="text-right text-grey500">
                {'유튜브 영상을 블로그 포스팅에\n적합한 글로 바꿔줍니다.'}
              </Text>
            </div>
            <div />
          </div>
        </main>
      ) : (
        <main className="h-full max-h-dscreen overflow-hidden max-w-[430px] mx-auto desktop:max-w-[1440px]">
          <div className="flex flex-col h-dscreen justify-between">
            <div>{/* <Nav isRight={true} /> */}</div>

            <div className="h-1/2 px-4">
              <div className="flex justify-between items-center">
                <div className="flex flex-col w-1/2">
                  <Text variant="32px/bold" className="mb-4">
                    {'영상으로\n블로그 시작하기'}
                  </Text>
                  <Icon name="logo" className="text-black w-[241px] mb-4" />
                  <Text variant="14px/regular" className="text-grey500 mb-[40px]">
                    {'유튜브 영상을 블로그 포스팅에\n적합한 글로 바꿔줍니다.'}
                  </Text>

                  <InputButton className={'mb-[32px]'} onClick={onClick} inputValue={inputValue} handleChangeInput={handleChangeInput} />
                </div>
                <div className="w-1/2">
                  <Image src={'/assets/imgs/home_desktop.png'} width={700} height={700} alt="img" />
                </div>
              </div>
            </div>
            <div />
          </div>
        </main>
      )}
    </>
  );
};
