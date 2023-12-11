import { Icon } from '../Icon';
import { InputButton } from '../InputButton';
import { Text } from '../Text';
import { Loading } from './Loading';

export const Home = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex flex-col">
      <Text variant="24px/Menu" className="mb-[12px]">
        {'영상으로\n블로그 시작하기'}
      </Text>
      <Icon name="logo" className="text-black w-[140px] mb-[40px]" />
      <InputButton className={'mb-[32px]'} onClick={onClick} />
      <Text variant="14px/regular" className="text-right text-grey500">
        {'유튜브 영상을 블로그 포스팅에\n적합한 글로 바꿔줍니다.'}
      </Text>
    </div>
  );
};
