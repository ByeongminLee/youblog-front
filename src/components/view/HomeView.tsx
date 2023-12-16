import useResponsive from '@/hooks/useResponsive';
import { Icon } from '../common/Icon';
import { InputButton } from '../common/InputButton';
import { Text } from '../common/Text';

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
        <div className="flex flex-col">
          <Text variant="24px/Menu" className="mb-[12px]">
            {'영상으로\n블로그 시작하기'}
          </Text>
          <Icon name="logo" className="text-black w-[140px] mb-[40px]" />
          <InputButton className={'mb-[32px]'} onClick={onClick} inputValue={inputValue} handleChangeInput={handleChangeInput} />
          <Text variant="14px/regular" className="text-right text-grey500">
            {'유튜브 영상을 블로그 포스팅에\n적합한 글로 바꿔줍니다.'}
          </Text>
        </div>
      ) : (
        <div className="flex flex-col">
          <Text variant="32px/bold" className="mb-4">
            {'영상으로\n블로그 시작하기'}
          </Text>
          <Icon name="logo" className="text-black w-[241px] mb-4" />
          <Text variant="14px/regular" className="text-grey500 mb-[40px]">
            {'유튜브 영상을 블로그 포스팅에\n적합한 글로 바꿔줍니다.'}
          </Text>
          <InputButton className={'mb-[32px]'} onClick={onClick} inputValue={inputValue} handleChangeInput={handleChangeInput} />
        </div>
      )}
    </>
  );
};
