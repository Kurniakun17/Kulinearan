import { DollarSign, Star } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
export const CardRecommendation = ({
  name,
  rating,
  price,
  distance,
  location,
  tags,
  index,
  tabValue,
}) => {
  return (
    <motion.div
      key={`${name} recommendation ${tabValue} key`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.125 * index, duration: 1, type: 'spring' }}
      className="flex flex-col rounded-xl overflow-hidden shadow-md"
    >
      <img
        src="https://picsum.photos/200"
        className="aspect-video object-cover"
      />
      <div className="py-3 px-4 flex flex-col gap-3">
        <h4 className="font-semibold text-xl">{name}</h4>
        <div className="flex gap-2">
          <div className="bg-orange-300/30 w-fit p-1 py-1.5 px-1.5 rounded-lg flex items-center gap-1">
            <div className="flex p-1 bg-orange-400/70 rounded-full items-center ">
              <Star size={12} color="#fff" />
            </div>
            <p className="text-sm text-orange-400/70 font-bold">{rating}</p>
          </div>
          <div className="bg-green-300/30 w-fit p-1 px-1.5 rounded-lg flex items-center justify-center ">
            <DollarSign size={16} className="text-green-500" />
            <p className="text-green-500 text-sm font-semibold">
              {price} in average
            </p>
          </div>
        </div>
        <div className="font-medium text-xs flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-zinc-400">{distance}</p>
            <div className="h-[50%] bg-zinc-400 w-[1px]"></div>
            <p className="text-zinc-400">{location}</p>
          </div>
          <div className="flex items-center gap-1">
            {tags.map((item, index) => {
              if (index === 0) {
                return (
                  <p key={`tag key ${item}`} className="text-zinc-400">
                    {item}
                  </p>
                );
              }
              return (
                <div
                  key={`tag key ${item}`}
                  className="flex gap-1 items-center"
                >
                  <div className="h-1 w-1 bg-zinc-400 rounded-full"></div>
                  <p className="text-zinc-400">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
