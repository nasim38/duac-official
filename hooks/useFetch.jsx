import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  // initiating states ----------------------
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch function------
    const fetchData = async () => {
      // double checking loading state -----
      setLoading(true);

      try {
        const rawData = await fetch(url);
        const jsonData = await rawData.json();
        setData(jsonData);
        console.log(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    // calling the fetch function ---------
    fetchData();
  }, [url]);
  return { data, error, loading };
};

export default useFetch;
