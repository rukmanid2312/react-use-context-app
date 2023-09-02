import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);

  return [data];
};

export default useFetch;
