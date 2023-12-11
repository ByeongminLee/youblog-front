import { motion } from 'framer-motion';

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate={'animate'}
      variants={motionVariants}
      className="bg-white w-full h-full fixed top-0 left-0 z-30 min-h-screen flex flex-col "
    >
      <div className="z-40 max-w-[400px] w-full mx-auto flex flex-col justify-between h-screen px-4 overflow-auto">{children}</div>
    </motion.div>
  );
};

const motionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

const body = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-[70px]  overflow-auto">{children}</div>;
};

const footer = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-8">{children}</div>;
};

Menu.body = body;
Menu.footer = footer;
