import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
const HeroSection = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  return (
    <section className="w-full lg:max-w-6xl">
      <div className="relative bg-red-500/90 rounded-b-[48px] flex flex-col gap-12 max-w-[1000px] py-20 px-8 lg:px-28 lg:pr-52">
        <motion.h1
          initial={{ x: -52, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: 'spring',
            stiffness: 800,
            damping: 200,
          }}
          className="text-3xl font-bold text-white mb-16"
        >
          Kulinearan
        </motion.h1>
        <motion.h1
          initial={{ y: -52, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: 'spring',
            stiffness: 800,
            damping: 200,
          }}
          className="text-white text-5xl leading-[64px] font-semibold"
        >
          Temukan makanan & <br /> minuman terbaik di <br /> kotamu
        </motion.h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(`/search/${searchValue}`);
          }}
          className="flex items-center py-6 px-8 rounded-[20px] w-full bg-white text-zinc-500"
        >
          <div className="flex items-center">
            <MapPin size={24} />
            <select className="w-20 text-xl">
              <option value={'Jakarta'} className="text-center">
                Jakarta
              </option>
            </select>
          </div>
          <div className="h-5 bg-zinc-400 w-[1px] mx-4"></div>
          <Search className=" mr-1" size={32} />
          <input
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Cari berdasarkan menu atau restoran"
            className="px-2 focus:no-underline focus:outline-none w-full text-xl"
          />
        </form>
        <img
          src="https://www.nicepng.com/png/full/964-9642029_veg-biryani-biryani.png"
          className="absolute hidden lg:block bottom-0 w-[500px] rounded-full  shadow-2xl -right-72"
        />
      </div>
    </section>
  );
};

export default HeroSection;
