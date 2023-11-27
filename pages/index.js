import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';


export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ['mainData'],
    queryFn: async () => {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/search.php?f=b'
      );
      return response.data.meals;
    },
  });

  if (isLoading) {
    return (
      <div className="grid place-items-center min-h-screen">
        <div className="w-4 h-4 bg-red-500 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col gap-2 items-center">
        <div className="grid grid-cols-4 gap-4 p-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={data[index].idMeal} className=" rounded-md bg-zinc-800">
              <img src={data[index].strMealThumb}></img>
              <div className="px-3 py-2">
                <p>{data[index].strMeal}</p>
              </div>
            </div>
          ))}
          {showMore &&
            Array.from({ length: 8 }).map((_, index) => (
              <div
                key={data[index + 8].idMeal}
                className=" rounded-md bg-zinc-800"
              >
                <img src={data[index + 8].strMealThumb}></img>
                <div className="px-3 py-2">
                  <p>{data[index + 8].strMeal}</p>
                </div>
              </div>
            ))}
        </div>
        <button
          className={`bg-zinc-800 px-4 py-2 rounded-xl w-fit `}
          onClick={() => {
            setShowMore((prev) => !prev);
          }}
        >
          {showMore ? 'Hide' : 'More'}
        </button>
      </div>
    </div>
  );
}
