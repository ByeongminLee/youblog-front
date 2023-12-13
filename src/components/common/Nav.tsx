'use client';
import { useState } from 'react';
import { Icon } from './Icon';
import { useRouter } from 'next/navigation';
import { Menu } from './Menu';
import { Text } from './Text';
import { List } from './List';
import { AuthButton } from './AuthButton';
import { Sheet, SheetContent, SheetDescription, SheetHeader } from './Sheet';
import tw from '@/utils/tw';

interface NavProps {
  isLeft?: boolean;
  isRight?: boolean;
  title?: string;
  className?: string;
}

export const Nav = ({ isLeft = false, isRight = false, title, className }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const LogoutHandler = () => {
    router.push('/');
  };

  const LoginHandler = () => {
    router.push('/auth');
  };

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={tw('sticky top-0 right-0 w-full h-16 px-4 py-2 bg-white z-[30]', className)}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between">
          {isLeft && <Icon name="arrow_left" className="w-8 h-8 cursor-pointer" onClick={() => router.push('/')} />}
          <div className="w-full px-[15px]">{title}</div>
          {isRight && (
            <div className="desktop:fixed desktop:top-0 desktop:right-0 desktop:px-6 desktop:py-2 cursor-pointer">
              <Icon name="hamburger" className="w-8 h-8" onClick={menuHandler} />
            </div>
          )}
        </div>
        <SheetContent
          className={'w-full bg-white desktop:max-w-[600px]'}
          header={<Text variant="24px/Menu">List</Text>}
          close={<Icon name="close" className="w-8 h-8" onClick={menuHandler} />}
        >
          <SheetHeader>
            <SheetDescription>
              <Menu>
                <Menu.body>
                  <List>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item selected={true}>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>로버트 빌딩거 : 무엇이 우리의 삶을 풍요롭게 만드는가asdfasdfasdfasdf</List.Item>
                    <List.Item>ㅁㄴㅇㄹ</List.Item>
                  </List>
                </Menu.body>
                <Menu.footer>
                  <AuthButton isLogin={true} loginHandler={LoginHandler} LogoutHandler={LogoutHandler} name="테스트이름" />
                </Menu.footer>
              </Menu>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
