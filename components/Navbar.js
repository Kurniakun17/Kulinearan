import React from 'react';
import { Toggle } from './Toggle';
import { Drumstick } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="bg-zinc-800/30 z-50 h-16 fixed flex justify-center items-center top-0 w-full px-8 sm:px-12">
      <div className="flex justify-between w-full lg:max-w-5xl">
        <div className="flex items-center gap-2">
          <Drumstick size={32} />
          <p className={`font-bold text-2xl`}>Kulineran</p>
        </div>
        <Toggle />
      </div>
    </div>
  );
};
