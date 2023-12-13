import tw from '@/utils/tw';
import { Button } from './Button';
import { Icon } from './Icon';
import Input from './Input';

const styles = {
  container: ['flex w-full h-12 rounded-md overflow-hidden', 'desktop:w-[420px] desktop:h-60px'],
  input: [
    'basis-4/5 bg-grey50 px-[12px] py-[14px] text-[14px] focus:outline-none',
    'placeholder:tracking-[-2%] placeholder:leading-[22px] placeholder-grey400',
    'desktop:text-[16px]',
  ],
  button: ['bg-[#000] text-[#fff]  basis-1/5 min-w-[88px] font-bold text-[14px]'],
};

export const InputButton = ({ className, onClick }: { className?: string; onClick?: () => void }) => {
  return (
    <div className={tw(styles.container, className)}>
      <Input className={tw(styles.input)} placeholder="Youtube URL 주소를 입력해 주세요" />
      <Button className={tw(styles.button)} onClick={onClick}>
        <span className="flex justify-center items-center desktop:text-[16px]">
          만들기
          <Icon name="play" className=" text-primary ml-1.5 desktop:w-[14px]" />
        </span>
      </Button>
    </div>
  );
};
