import { Button } from './Button';
import { Icon } from './Icon';
import { Text } from './Text';
interface AuthButtonProps {
  isLogin: boolean;
  name: string;
  loginHandler: () => void;
  LogoutHandler: () => void;
}

export const AuthButton = ({ isLogin, name, loginHandler, LogoutHandler }: AuthButtonProps) => {
  return (
    <>
      {isLogin ? (
        <Button
          className="w-full flex justify-between items-center px-4 py-[15px] border border-black50 rounded-md bg-white text-left"
          onClick={LogoutHandler}
        >
          <Text variant="16px/regular" className="flex justify-start text-left">
            {name}
          </Text>
          <Icon name="logout" className="w-5" />
        </Button>
      ) : (
        <Button
          className="w-full flex justify-between items-center px-4 py-[15px] border border-black50 rounded-md bg-white text-left"
          onClick={loginHandler}
        >
          <Text variant="16px/regular" className="flex justify-start text-left">
            로그인 하기
          </Text>
          <Icon name="user" className="w-5" />
        </Button>
      )}
    </>
  );
};
