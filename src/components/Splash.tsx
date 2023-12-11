'use client';
import tw from '@/utils/tw';
import { Icon } from './Icon';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const motionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

export const Splash = () => {
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
    <div className={tw('w-full h-full min-w-screen min-h-dscreen', 'fixed top-0 left-0', 'bg-black', 'z-[9999999]')}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={motionVariants}
        className={tw('w-[130px]', 'absolute top-1/3 left-[calc(50%-65px)] transform -translate-y-1/2')}
      >
        <Icon name="logo" className={tw('w-[130px] text-white')} />
      </motion.div>
    </div>
  );
};
