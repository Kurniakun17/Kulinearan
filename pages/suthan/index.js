import React from 'react';
import { motion } from 'framer-motion';
import BgFuture from '@/components/bg-future';

const index = () => {
  return (
    <div className="h-screen grid place-items-center bg-white">
      {/* <motion.p
        initial={{ x: -36 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, type: 'spring' }}
        className="fixed left-12"
      >
        Love
      </motion.p> */}
      <div className="fixed top-0 w-full pt-8 h-12 grid place-items-center">
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, type: 'spring' }}
          className="text-black text-2xl font-bold tracking-wider"
        >
          Framer
        </motion.h1>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="bg-transparent h-80 relative rounded-3xl">
          <motion.img
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, type: 'spring' }}
            className="relative z-10 w-96"
            src="/bg-future.svg"
          />

          <motion.img
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, type: 'spring' }}
            src="/hero.png"
            className="w-[270px] h-[400px] fixed bottom-[20%] left-[20%] z-20 -translate-x-1/2 "
          />

          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, type: 'spring' }}
            className="absolute inset-8 rounded-2xl  "
          ></motion.div>
        </div>
        <motion.button
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, type: 'spring' }}
          className="relative w-fit z-30 font-bold px-4 py-1 bg-green-500 rounded-full text-lg "
        >
          Rounded Up
        </motion.button>
      </div>
    </div>
  );
};

export default index;
