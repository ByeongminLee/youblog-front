import { Button } from './Button';
import { Icon } from './Icon';
import { Text } from './Text';

export const Logout = ({ name, LogoutHandler }: { name: string; LogoutHandler: () => void }) => {
  return (
    <Button
      className="w-full flex justify-between items-center px-4 py-[15px] border border-black50 rounded-md bg-white text-left"
      onClick={LogoutHandler}
    >
      <Text variant="16px/regular" className="flex justify-start text-left">
        {name}
      </Text>
      <div>
        <Icon name="logout" className="w-4 h-4" />
      </div>
    </Button>
  );
};
