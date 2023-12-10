import tw from '@/utils/tw';
import { Icon } from './Icon';

export const Splash = () => {
  return (
    <div className={tw('w-full h-full bg-black min-w-[100vw] min-h-[100vh]')}>
      <Icon name="logo_white" className="w-[130px]" />
    </div>
  );
};
