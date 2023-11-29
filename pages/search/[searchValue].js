import { useRouter } from 'next/router';
import React from 'react';

const SearchPages = () => {
  const routes = useRouter();
  const { searchValue } = routes.query;
  return <div>{searchValue}</div>;
};

export default SearchPages;
