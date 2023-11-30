import { ThumbsUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { motion, useAnimate } from 'framer-motion';
export const Review = ({
  name,
  occupation,
  totalReviews,
  followers,
  title,
  body,
}) => {
  const [isHelpful, setIsHelpful] = useState(false);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    if (isHelpful) {
      animate(
        '.helpful',
        { rotate: [-45, 0] },
        { type: 'spring', duration: 1, stiffness: 800 }
      );
    } else {
      animate(
        '.helpful',
        { rotate: [45, 0] },
        { type: 'spring', duration: 1, stiffness: 800 }
      );
    }
  }, [isHelpful]);

  return (
    <div className="bg-white border-t-2 border-zinc-100 h-fit p-5 py-8 lg:py-12 flex flex-col gap-4">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-2">
        {/* Profile */}
        <div className="flex items-center w-fit flex-col">
          <img
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`}
            className="w-16 h-16 bg-gray-100 rounded-full"
          ></img>
          <h4 className="font-bold text-lg mt-2">{name}</h4>
          <p>{occupation}</p>
          <div className="flex w-56 justify-center">
            <p>{totalReviews} Ulasan</p>
            <div className="flex gap-1 ml-1 items-center">
              <div className="h-1 w-1 bg-zinc-500 rounded-full"></div>
              <p className="352 Followers">{followers} Followers</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-yellow-400">
          <div className="flex gap-4">
            <StarRatings
              starDimension="18"
              starSpacing="2px"
              rating={4.7}
              starRatedColor="rgb(250 204 21 / 1)"
            />
            <p>27 Maret 2023</p>
          </div>
          <h4 className="text-lg mt-1 font-semibold">{title}</h4>
          <p>{body}</p>
          <div className="grid grid-cols-3 gap-2 my-2">
            <img
              src="https://images.unsplash.com/photo-1621188988909-fbef0a88dc04?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover cols-span-1 aspect-square bg-gray-300 rounded-xl"
            ></img>
            <img
              src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover aspect-square cols-span-1 bg-gray-300 rounded-xl"
            ></img>
          </div>
          <motion.button
            // whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.85 }}
            ref={scope}
            onClick={() => {
              setIsHelpful((prev) => !prev);
            }}
            className={`border my-2 items-center font-bold duration-300 w-fit px-4 py-2 rounded-lg flex  ${
              isHelpful
                ? 'text-white bg-red-500 border-red-500'
                : 'border-zinc-400 text-zinc-400'
            } gap-2`}
          >
            <motion.div
              variants={{ liked: { rotate: 60 } }}
              transition={{ type: 'spring' }}
              className="helpful"
            >
              <ThumbsUp size={18} />
            </motion.div>{' '}
            Membantu
          </motion.button>
        </div>
      </div>
    </div>
  );
};
