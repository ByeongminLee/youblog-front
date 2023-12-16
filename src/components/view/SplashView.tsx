'use client';
import tw from '@/utils/tw';
import { Icon } from '../common/Icon';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const motionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

export const SplashView = () => {
  const [isVisible, setIsVisible] = useState(true);
  const time = 1500;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, time);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={tw('w-full h-full min-w-screen min-h-screen', 'fixed top-0 left-0', 'bg-black50', 'z-[100000]')}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={motionVariants}
        className={tw('w-full absolute top-1/3 flex items-center justify-center transform -translate-y-1/2')}
      >
        <Icon name="logo" className={tw('w-[130px] desktop:w-[280px] text-white')} />
      </motion.div>
    </div>
  );
};
