import Navbar from '@/components/Navbar';
import { restaurantData } from '@/utils/dataDummy';
import {
  Star,
  DollarSign,
  Clock,
  Milestone,
  MapPin,
  Copy,
  Phone,
  Globe2,
} from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';

const DetailPage = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    setData(restaurantData.filter((item) => item.id === parseInt(id))[0]);
  }, [id]);
  console.log(data);
  if (!data) {
    return <div className="h-4 w-4 bg-red-500 animate-spin"></div>;
  }
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen ">
      <Navbar />

      <main className="my-36 w-full lg:max-w-[1080px] px-6 lg:px-12 xl:max-w-[80%] flex flex-col gap-4">
        <h2 className="text-4xl font-bold">{data.name}</h2>
        {/* ratings and price */}
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="flex gap-2 items-center">
            <div className={`pb-1`}>
              <StarRatings
                starDimension="24px"
                starRatedColor="rgb(234 179 8 / 0.8)"
                starSpacing="0px"
                rating={parseFloat(data.rating)}
              />
            </div>
            <p className="text-yellow-500 text-xl font-bold">{data.rating}</p>
            <p>{`(2.412 ulasan)`}</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="hidden lg:block mx-1 h-4 w-[1px] bg-zinc-500"></div>
            <div className="flex ">
              <DollarSign size={16} className="text-green-500" />
              <DollarSign size={16} className="text-green-500" />
              <DollarSign size={16} className="text-green-500" />
            </div>
            <p className="font-medium">{data.avg_price} / orang</p>
          </div>
        </div>

        {/* clock and tags */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-2">
          <div className="flex gap-2 items-center">
            <Clock className="text-zinc-500" />
            <p className="text-green-500 font-bold">Buka</p>
            <div className="h-1 w-1 bg-zinc-400 rounded-full"></div>
            <p>{data.open_time}</p>
            <div className="hidden lg:block mx-1 h-4 w-[1px] bg-zinc-500"></div>
          </div>
          <div className="flex gap-1.5">
            {data.tags.map((item, index) => {
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
                  className="flex gap-1.5 items-center"
                >
                  <div className="h-1 w-1 bg-zinc-400 rounded-full"></div>
                  <p className="text-zinc-400">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <img
            src="https://picsum.photos/1080"
            className="object-cover w-full bg-gray-400 lg:col-span-2 aspect-video rounded-2xl"
          ></img>
          <img
            src="https://picsum.photos/1080"
            className="object-cover w-full bg-gray-400 aspect-video  rounded-2xl"
          ></img>
          {/* <div className="w-full h-full col-start-3 col-end-4 bg-gray-400 aspect-video rounded-2xl"></div> */}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <section className="bg-white h-fit p-5 flex flex-col gap-4 rounded-xl">
            <h2 className="font-semibold text-xl">Penilaian dan Ulasan</h2>
            <div className="w-full text-center flex flex-col gap-2">
              <h3 className="font-bold text-4xl  text-orange-300">
                {data.rating}
              </h3>
              <StarRatings
                starDimension="28px"
                rating={parseFloat(data.rating)}
                starRatedColor="rgb(253 186 116 / 1)"
              />
              <p>{`(2.412 ulasan)`}</p>
            </div>
          </section>
          <section className="bg-white p-5 flex flex-col gap-4 rounded-xl">
            <h2 className="font-semibold text-xl">Lokasi Restoran</h2>
            <div className="w-full flex flex-col gap-4">
              <img
                src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg"
                className="aspect-video rounded-xl object-cover"
              />
              <p className="font-semibold flex items-center gap-1">
                <span>
                  <MapPin className="w-5" />
                </span>{' '}
                {data.location}
              </p>
              <div className="flex gap-2">
                <button className="w-fit px-3 font-bold text-red-500 hover:text-white hover:bg-red-500 duration-300 flex gap-2 py-1.5 border-2 border-red-500 rounded-lg">
                  <Milestone className="w-5" />
                  Direction
                </button>
                <button className="w-fit px-3 font-bold flex items-center gap-2 py-1.5 border-2 border-zinc-500 rounded-lg">
                  <Copy className="w-5" />
                  Salin
                </button>
              </div>
              <div className="w-full h-[0.5px] my-2 bg-zinc-500/40 rounded-md"></div>
              <h2 className="font-semibold text-xl">Kontak Restoran</h2>
              <p className="flex gap-2 items-center">
                <span>
                  <Phone className="w-5" />
                </span>
                +62895342958390
              </p>
              <p className="flex gap-2 items-center">
                <span>
                  <Globe2 className="w-5" />
                </span>
                www.google.com
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
