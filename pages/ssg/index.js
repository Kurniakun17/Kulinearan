import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: 'hai',
    },
  };
};

const index = ({ data }) => {
  const [state, setState] = useState(1);
  function getFilter() {
    switch (state) {
      case 1:
        return 'grayscale';
      case 2:
        return 'grayscale-0 invert-0';
      case 3:
        return 'grayscale-0 invert';
    }
  }

  return (
    <div className="h-screen bg-black grid place-items-center relative overflow-hidden">
      {/* Propagation */}
      {/* <motion.div
        initial="first"
        whileHover="second"
        variants={{ first: { x: 0 }, second: { scale: 1.5 } }}
        transition={{type:'tween'}}
        className="bg-zinc-800 w-24 h-24 flex rounded-xl flex-col justify-center items-center"
      >
        <motion.div
          className="w-12 h-12 bg-zinc-500 rounded-lg"
          variants={{ first: { x: 0 }, second: { x: 50 } }}
        ></motion.div>
      </motion.div> */}

      {/* Image */}
      <AnimatePresence>
        <motion.img
          key={`${state ? `hero2.svg` : 'hero3.png'}`}
          transition={{ duration: 1, type: 'tween', delay: 1.5 }}
          className={`filter absolute right-0 ${getFilter()} duration-500 h-[100%]`}
          src={'hero3.png'}
        />
      </AnimatePresence>

      <button
        onClick={() => {
          setState((prev) => {
            if (prev == 3) {
              return 1;
            }
            return prev + 1;
          });
        }}
        className={` border  ${
          state === 1
            ? 'bg-white  border-white hover:bg-black hover:text-white'
            : state === 2
            ? 'bg-red-500 border-red-500 text-white hover:bg-black hover:text-white'
            : 'bg-red-500  border-red-500 filter invert text-black hover:bg-white hover:text-black'
        }  duration-300 px-4 py-2 font-bold absolute rounded-xl left-1/2 -translate-x-1/2 bottom-[20%]`}
      >
        Change
      </button>
    </div>
  );
};

export default index;
