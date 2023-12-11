'use client';
import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { Spin as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/navigation';
import { Menu } from './Menu';
import { Text } from './Text';
import { motion } from 'framer-motion';
import { List } from './List';
import { Logout } from './Logout';

interface NavProps {
  isLeft?: boolean;
  isRight?: boolean;
  title?: string;
}

export const Nav = ({ isLeft = false, isRight = false, title }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    };

    handleBodyOverflow();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const LogoutHandler = () => {
    router.push('/');
  };

  return (
    <>
      <nav className="fixed top-0 w-full h-16 flex items-center justify-between bg-white z-[9999] max-w-[430px] p-4">
        {isOpen && (
          <motion.div className="z-40" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
            <Text variant="24px/Menu">List</Text>
          </motion.div>
        )}
        {isLeft && (
          <div className="justify-start">
            <Icon name="arrow_left" className="w-8 h-8 cursor-pointer" onClick={() => router.back()} />
          </div>
        )}
        <div className="px-[15px]">{title}</div>
        {isRight && (
          <div className="justify-end z-[100000]">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
          </div>
        )}
        {isOpen && (
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
              <Logout LogoutHandler={LogoutHandler} name="테스트" />
            </Menu.footer>
          </Menu>
        )}
      </nav>
      <div className="h-16 w-full" />
    </>
  );
};
