import tw from '@/utils/tw';
import { Button } from './Button';
import { Icon } from './Icon';

interface SnsButtonProps {
  type: 'kakao' | 'google';
}

const styles = {
  kakao: 'bg-[#FEE500] rounded-md',
  google: 'bg-white border border-[#ececec] rounded-md',
};

const label = {
  kakao: '카카오로 시작하기',
  google: 'Google로 시작하기',
};

export const SnsButton = ({ type }: SnsButtonProps) => {
  return (
    <Button className={tw(styles[type])}>
      <div className="flex items-center w-full  p-4">
        <Icon name={type} className="w-5 h-5" />
        <span className="w-full leading-[24px] text-[17px] font-semibold text-black50 text-center">{label[type]}</span>
      </div>
    </Button>
  );
};
