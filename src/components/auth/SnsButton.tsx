import tw from '@/utils/tw';
import { Button } from '../common/Button';
import { Icon } from '../common/Icon';

interface SnsButtonProps {
  type: 'kakao' | 'google';
  className?: string;
}

const styles = {
  kakao: 'bg-[#FEE500] rounded-md',
  google: 'bg-white border border-[#ececec] rounded-md',
};

const label = {
  kakao: '카카오로 시작하기',
  google: 'Google로 시작하기',
};

export const SnsButton = ({ type, className }: SnsButtonProps) => {
  return (
    <Button className={tw(styles[type], className)}>
      <div className={tw('flex items-center w-full p-4')}>
        <Icon name={type} className="w-5 h-5" />
        <span className="w-full leading-[24px] text-[17px] font-semibold text-black50 text-center">{label[type]}</span>
      </div>
    </Button>
  );
};
