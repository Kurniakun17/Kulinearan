import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import { Navbar } from '@/components/Navbar';
import { ChevronLeft, ChevronRight, MapPin, Search } from 'lucide-react';
import { CardCollection } from '@/components/CardCollection';
import { CardRecommendation } from '@/components/CardRecommendation';
import { TabChip } from '@/components/TabChip';
import { collectionData, restaurantData } from '@/utils/dataDummy';
import Head from 'next/head';

export default function Home() {
  // const [showMore, setShowMore] = useState(false);
  const [tabValue, setTabValue] = useState('Semua');
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(restaurantData);
  const { data, isLoading } = useQuery({
    queryKey: ['mainData'],
    queryFn: async () =>
      axios.get('https://pokeapi.co/api/v2/pokemon/ditto', { timeout: 5000 }),
  });

  useEffect(() => {
    setFilteredData(
      restaurantData.filter((item) => {
        if (tabValue === 'Semua') {
          return true;
        }
        return item.type === tabValue;
      })
    );
  }, [tabValue]);

  if (isLoading) {
    return (
      <div className="grid place-items-center min-h-screen">
        <div className="w-4 h-4 bg-red-500 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative grid place-items-center">
      <Head>
        <title>Kulinearan</title>
      </Head>
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Hero section */}
      <section className=" w-full lg:max-w-[1080px] xl:max-w-[80%]">
        <div className="relative bg-red-500/90 rounded-b-[48px] flex flex-col gap-12 max-w-[1000px] py-20 px-28 pr-52">
          <h1 className="text-3xl font-bold text-white mb-16">Kulinearan</h1>
          <h1 className="text-white text-5xl leading-[64px] font-semibold">
            Temukan makanan & <br /> minuman terbaik di <br /> kotamu
          </h1>
          <div className="flex items-center py-6 px-8 rounded-[20px] w-full bg-white text-zinc-500">
            <button className="flex items-center">
              <MapPin size={24} />
              <select className="w-20 text-xl">
                <option value={'Jakarta'} className="text-center">
                  Jakarta
                </option>
              </select>
            </button>
            <div className="h-5 bg-zinc-400 w-[1px] mx-4"></div>
            <Search className=" mr-1" size={32} />
            <input
              placeholder="Cari berdasarkan menu atau restoran"
              className="px-2 focus:no-underline focus:outline-none w-full text-xl"
            />
          </div>
          <img
            src="https://www.nicepng.com/png/full/964-9642029_veg-biryani-biryani.png"
            className="absolute hidden lg:block bottom-0 w-[500px] rounded-full  shadow-2xl -right-72"
          />
        </div>
      </section>

      {/* body */}
      <main className="mt-16 pb-24 lg:max-w-5xl px-8 lg:px-0 flex flex-col items-center gap-12">
        {/* Koleksi Restoran */}
        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-3xl h">Koleksi Restoran Di Jakarta</h2>
          <p className="">
            Jelajahi daftar terpilih untuk restoran, kafe dan bar terbaik
            Jakarta <br />
            berdasarkan tren
          </p>
          <div className="flex mt-2 gap-4 overflow-x-auto">
            {collectionData.map((item, index) => {
              return <CardCollection name={item.name} index={index + 1} />;
            })}
          </div>
        </section>

        <section className="flex flex-col gap-6 w-full ">
          <h2 className="font-bold text-3xl h">Rekomendasi Restoran</h2>
          <div className="flex justify-between">
            {/* Tab Chip */}
            <div className="flex gap-4">
              {['Semua', 'Pizza', 'Sushi', 'Burger', 'Fine Dining'].map(
                (name) => (
                  <TabChip
                    onClickHandler={(name) => {
                      setTabValue(name);
                      setOffset(0);
                    }}
                    name={name}
                    tabValue={tabValue}
                  />
                )
              )}
            </div>
            <div className="flex gap-2">
              <button
                disabled={offset === 0}
                onClick={() => setOffset((prev) => prev - 6)}
                className="group bg-red-500 disabled:bg-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
              >
                <ChevronLeft className="text-white group-disabled:text-gray-500 " />
              </button>
              <button
                disabled={filteredData.length - 6 <= offset}
                onClick={() => setOffset((prev) => prev + 6)}
                className="bg-red-500 group disabled:bg-gray-300 rounded-full h-8 w-8 flex justify-center items-center"
              >
                <ChevronRight className="text-white group-disabled:text-gray-500" />
              </button>
            </div>
          </div>
          <div className="grid gap-3 gap-y-5 grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => {
              if (filteredData.length <= index + offset) {
                return null;
              }
              const item = filteredData[index + offset];
              return (
                <CardRecommendation
                  name={item.name}
                  rating={item.rating}
                  price={item.avg_price}
                  distance={item.distance}
                  location={item.location}
                  tags={item.tags}
                  index={index + 1}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
