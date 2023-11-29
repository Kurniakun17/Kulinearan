import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MapPin, Search } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [locationValue, setLocationValue] = useState('Jakarta');

  return (
      <div className="bg-white flex justify-center w-full">

    <div className="z-50 bg-white fixed top-0 py-2 flex justify-center w-full">
      <div className="w-[90%] lg:max-w-[1080px] xl:max-w-[80%] flex items-center justify-between">
        <div className="flex items-center gap-6 xl:gap-12 py-4">
          <Link href={'/'} className="text-3xl text-red-500 font-bold">
            Kulinearan
          </Link>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.replace(
                `/search?data=${searchValue}&location=${locationValue}`
              );
            }}
            className="flex items-center py-4 px-8 rounded-[20px] w-full bg-gray-100 text-zinc-500 "
          >
            <div className="flex items-center">
              <MapPin size={24} />
              <select
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
                className="w-20 text-xl bg-gray-100"
              >
                <option value={'Jakarta'} className="text-center">
                  Jakarta
                </option>
                <option value={'Depok'} className="text-center">
                  Depok
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
              className="px-2 bg-gray-100 focus:no-underline focus:outline-none w-full text-xl"
            />
          </form>
        </div>
        <div className="hidden lg:flex gap-8 items-center">
          <button className="text-red-500 font-bold text-xl">Login</button>
          <button className="text-white font-bold text-xl py-2 px-4 rounded-2xl bg-red-500">
            Sign Up
          </button>
        </div>
      </div>
    </div>
</div>
  );
};

export default Navbar;

// export const Navbar = () => {
//   return (
//     <div className="bg-zinc-800/30 z-50 h-16 fixed flex justify-center items-center top-0 w-full px-8 sm:px-12">
//       <div className="flex justify-between w-full lg:max-w-5xl">
//         <div className="flex items-center gap-2">
//           <Drumstick size={32} />
//           <p className={`font-bold text-2xl`}>Kulineran</p>
//         </div>
//         <Toggle />
//       </div>
//     </div>
//   );
// };
