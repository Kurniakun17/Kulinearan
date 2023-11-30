import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MapPin, Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [locationValue, setLocationValue] = useState('Jakarta');

  return (
    <div className="bg-white flex z-50 fixed top-0  justify-center w-full">
      <div className="bg-white h-28 py-2 flex items-center justify-center w-full">
        <div className="w-full lg:max-w-[1080px] xl:max-w-[80%] flex items-center justify-center lg:justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 xl:gap-12 py-4">
            <Link
              href={'/'}
              className="text-2xl lg:text-3xl text-red-500 font-bold"
            >
              Kulinearan
            </Link>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                router.replace(
                  `/search?data=${searchValue}&location=${locationValue}`
                );
              }}
              className="flex items-center pl-4 py-1 lg:py-4 lg:px-8 rounded-[20px] w-full bg-gray-100 text-zinc-500 "
            >
              <div className="flex items-center">
                <MapPin className="w-4 lg:w-6" />
                <select
                  value={locationValue}
                  onChange={(e) => setLocationValue(e.target.value)}
                  className="w-14 lg:w-20 text-sm lg:text-xl bg-gray-100"
                >
                  <option value={'Jakarta'} className="text-center">
                    Jakarta
                  </option>
                  <option value={'Depok'} className="text-center">
                    Depok
                  </option>
                </select>
              </div>
              <div className="h-5 bg-zinc-300 w-[1px] mx-2 lg:mx-4"></div>
              <Search className="w-4 lg:w-8 " />
              <input
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                placeholder="Cari berdasarkan menu atau restoran"
                className="px-2 bg-gray-100 focus:no-underline focus:outline-none text-sm lg:text-lg w-40 sm:w-72 lg:w-96"
              />
            </form>
          </div>
          <div className="hidden lg:flex gap-8 items-center">
            <button className="text-red-500 font-bold text-xl">Login</button>
            <button className="text-white hover:bg-white border border-white hover:border-red-500 hover:text-red-500 font-bold text-xl py-2 px-4 rounded-2xl bg-red-500">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
