import { motion } from 'framer-motion';

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate={'animate'}
      variants={motionVariants}
<<<<<<< HEAD:src/components/common/Menu.tsx
      className="w-full min-h-dscreen h-full overflow-auto flex  flex-col justify-center items-center mt-16"
    >
      <div className="max-w-[430px] desktop:max-w-full w-full px-4">{children}</div>
=======
      className="bg-white w-full h-full fixed top-0 left-0 z-30 min-h-dscreen flex flex-col "
    >
      <div className="z-40 max-w-[400px] w-full mx-auto flex flex-col justify-between h-dscreen px-4 overflow-auto">{children}</div>
>>>>>>> main:src/components/Menu.tsx
    </motion.div>
  );
};

const motionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

const body = ({ children }: { children: React.ReactNode }) => {
  return <div className="overflow-auto h-[calc(100vh-200px)]">{children}</div>;
};

const footer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full my-4">{children}</div>;
};

Menu.body = body;
Menu.footer = footer;
