import React, { useEffect, useState } from 'react'

export const useFetchData = (url = "", isFetchActive = true) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFetch = async () => {
    setIsLoading(true);
    try {
      let dataResult = await fetch(url);
      dataResult = await dataResult.json();
      setData(dataResult);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error, 'error');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
   isFetchActive && handleFetch();
  }, [url, isFetchActive]);

  return {
    data,
    isLoading,
    isError,
  };
}
