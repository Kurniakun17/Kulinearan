import React from 'react';
import StarRatings from 'react-star-ratings';

export const Review = ({
  imgUrl,
  name,
  occupation,
  totalReviews,
  followers,
  title,
  body,
}) => {
  return (
    <div className="bg-white h-fit p-5 py-8 flex flex-col gap-4 rounded-xl">
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
            <div className="cols-span-1 aspect-square bg-gray-300 rounded-xl"></div>
            <div className="cols-span-1 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
