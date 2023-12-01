import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen overflow-hidden relative w-full flex items-center justify-center bg-white">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3, ease: 'easeInOut', type: 'tween' }}
        className="text-black text-2xl absolute top-9 font-bold tracking-wider"
      >
        Apa lo liat liat
      </motion.h1>
      <motion.img
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', type: 'tween' }}
        src="/hero.png"
        className="w-[90%] max-w-[550px] ml-8 lg:ml-36 z-20 fixed bottom-0"
      />

      <motion.img
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', type: 'tween' }}
        className="relative z-10 w-[90%] max-w-[1000px]"
        src="/bg-future.svg"
      />

      <motion.button
        onClick={() => router.replace('/')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 5, ease: 'easeInOut', type: 'tween' }}
        className="flex gap-2 bg-black border border-black left-9 top-9 hover:bg-white duration-500 hover:text-black text-white absolute z-50 w-fit px-4 py-2 rounded-full"
      >
        <ChevronLeft /> Go Back
      </motion.button>
    </div>
  );
};

export default index;
