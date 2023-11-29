import Navbar from '@/components/Navbar';
import { restaurantData } from '@/utils/dataDummy';
import { Star, DollarSign } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

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
    <div className="flex flex-col items-center bg-gray-200 min-h-screen ">
      <Navbar />

      <main className="mt-32 lg:max-w-[1080px] px-12 xl:max-w-[80%]">
        <h2 className="text-4xl font-bold">{data.name}</h2>
        <div className="flex gap-2 items-center">
          <div className={`flex gap-2 `}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Star className="text-yellow-500" />
            ))}
          </div>
          <p className="text-yellow-500 text-xl font-bold">{data.rating}</p>
          <div className="mx-1 h-4 w-[1px] bg-zinc-500"></div>
          <div className="flex ">
            <DollarSign size={16} className="text-green-500" />
            <DollarSign size={16} className="text-green-500" />
            <DollarSign size={16} className="text-green-500" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailPage;
