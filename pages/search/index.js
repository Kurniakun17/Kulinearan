import { restaurantData } from '@/utils/dataDummy';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { CardRecommendation } from '@/components/CardRecommendation';
import { useSearchParams } from 'next/navigation';
const SearchPages = () => {
  const router = useRouter();
  const { searchValue } = router.query;
  const searchParams = useSearchParams();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const data = searchParams.get('data');
    const location = searchParams.get('location');

    setSearchData(() => {
      const tempData = restaurantData.filter((item) =>
        item.name.toLowerCase().includes(data.toLowerCase())
      );
      const result = tempData.filter((item) =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
      console.log(result);
      
      return result;
    });
  }, [searchParams]);

  if (searchData.length === 0) {
    return (
      <div className="min-h-screen bg-gray-100 grid place-items-center">
        <Navbar />
        <div className="bg-white p-6 px-8 rounded-3xl">
          <h2 className="font-medium text-2xl">
            Result for {searchParams.get('data')} on{' '}
            {searchParams.get('location')} not found :{`(`}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen ">
      <Navbar />

      <main className="w-full mt-32 min-h-screen lg:max-w-[1080px] xl:max-w-[80%] ">
        <div className="px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {searchData.length === 0 ? (
            <h1>Restaurant not found :{`(`}</h1>
          ) : (
            searchData.map((item, index) => (
              <CardRecommendation
                key={`${item.name} recommendation key 1`}
                {...item}
                index={index + 1}
                tabValue={'asdasd'}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPages;
