'use client';
import { useState } from 'react';
import { Icon } from './Icon';
import { Spin as Hamburger } from 'hamburger-react';
import { useRouter } from 'next/navigation';

interface NavProps {
  isLeft?: boolean;
  isRight?: boolean;
  title?: string;
}

export const Nav = ({ isLeft = false, isRight = false, title }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="sticky w-full h-16 flex items-center justify-center">
      {isLeft && (
        <div>
          <Icon name="arrow_left" className="w-8 h-8 cursor-pointer" onClick={() => router.back()} />
        </div>
      )}
      <div className="flex-1 px-[15px]">{title}</div>
      {isRight && (
        <div>
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
        </div>
      )}
    </nav>
  );
};
