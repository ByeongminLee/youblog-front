import { Icon } from '../Icon';
import { Text } from '../Text';

export const SignIn = () => {
  return (
    <div className="flex flex-col">
      <Text variant="24px/Menu" className="mb-[12px]">
        {'영상으로\n블로그 시작하기'}
      </Text>
      <Icon name="logo" className="text-black w-[140px] mb-[16px]" />
      <Text variant="14px/regular" className="text-grey500 mb-[60px]">
        {'유블로그를 사용하기 위해\n로그인이 필요합니다'}
      </Text>
    </div>
  );
};
