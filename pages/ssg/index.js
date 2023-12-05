import {  motion, useAnimation } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';
export const getStaticProps = async (ctx) => {
  return {
    props: {
      data: 'hai',
    },
  };
};

const index = ({ data }) => {
  const [state, setState] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const animation = useAnimation();

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

  useEffect(() => {
    if (isActive) {
      animation.start('swing')
    } else {
      animation.start('initial');
    }
  }, [isActive]);

  return (
    <div
      className={`h-screen ${
        state === 1 ? 'bg-white' : 'bg-zinc-800'
      } duration-300 grid place-items-center relative overflow-y-hidden`}
    >
      {/* <motion.div
        className="dropdown flex flex-col gap-4"
        variants={{ initial: { opacity: 1 }, active: { opacity: 0 } }}
      >
        <motion.button
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
          initial="initial"
          variants={{ initial: { scale: 1 }, active: { scale: 1.2 } }}
          className="bg-purple-400 text-white rounded-xl flex justify-between w-[300px] font-bold px-4 py-3"
        >
          <h1 className="text-white">Menu</h1>
          <motion.div
            variants={{ initial: { rotate: 0 }, active: { rotate: 180 } }}
          >
            <ChevronDown />
          </motion.div>
        </motion.button>
        <motion.div
          variants={{
            initial: { rotate: -100, opacity: 0 },
            active: { x: 0, opacity: 1 },
          }}
          className="font-bold rounded-xl px-4 py-3 bg-purple-400 "
        >
          <p className="text-white ">Item 1</p>
        </motion.div>
      </motion.div> */}

      <div className="flex flex-col gap-4 items-center">
        <motion.div
          initial="initial"
          animate={animation}
          variants={{ initial: { scale: 1 }, swing: { scale: 1.2 } }}
          className="h-12 w-12 bg-zinc-600 rounded-xl grid place-items-center"
        >
          <motion.div
            variants={{ initial: { y: 0 }, swing: { y: -50 } }}
            className="h-8 w-8 bg-zinc-400 rounded-xl"
          ></motion.div>
        </motion.div>
        <button
          onClick={() => {
            setIsActive((prev) => !prev);
          }}
          className={`border duration-300 border-black ${
            isActive ? 'text-white bg-black' : 'text-black bg-white'
          } px-2 py-1 rounded-xl`}
        >
          Mudryk
        </button>
      </div>
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
      {/* <motion.img
        transition={{ duration: 1, type: 'tween', delay: 1.5 }}
        className={`filter absolute bottom-0 right-0 ${getFilter()} lg:translate-x-0 duration-500 h-[100%] object-cover`}
        src={'hero3.png'}
      /> */}

      {/* Stagger children & propagation  (child must not have initial and animate, but should be an exact name of parents variant) */}
      {/* <motion.div
        initial={'initial'}
        animate={'appear'}
        // variants={{ appear: { scale: 1 }, initial: { scale: 0 } }}
        transition={{ staggerChildren: 0.3 }}
        className="w-[300px] overflow-hidden flex flex-col py-2 px-4 gap-2 rounded-xl bg-zinc-700 "
      >
        <motion.div
          variants={{ initial: { x: -100 }, appear: { x: 0 } }}
          className="bg-zinc-500 rounded-lg h-6 w-full py-2 flex items-center"
        >
          <motion.h1
            variants={{ initial: { opacity:0 }, appear: { opacity:1, delay: 1 } }}
            transition={{duration : 2} }
            className="font-bold ml-1"
          >
            Hai
          </motion.h1>
        </motion.div>
        <motion.div
          variants={{ initial: { x: -100 }, appear: { x: 0 } }}
          className="bg-zinc-500 rounded-lg h-6 w-full py-2"
        ></motion.div>
        <motion.div
          variants={{ initial: { x: -100 }, appear: { x: 0 } }}
          className="bg-zinc-500 rounded-lg h-6 w-full py-2"
        ></motion.div>
      </motion.div>*/}

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
