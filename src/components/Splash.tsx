'use client';
import tw from '@/utils/tw';
import { Icon } from './Icon';
import { motion } from 'framer-motion';

const motionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

export const Splash = () => {
  return (
    <div className={tw('w-full h-full min-w-screen min-h-screen', 'fixed top-0 left-0', 'bg-black')}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={motionVariants}
        className={tw('w-[130px]', 'absolute top-1/3 left-[calc(50%-65px)] transform -translate-y-1/2')}
      >
        <Icon name="logo_white" className={tw('w-[130px]')} />
      </motion.div>
    </div>
  );
};
