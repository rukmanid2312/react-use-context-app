import React, { useEffect, useState, useMemo } from "react";

export const useQueryParams = () => {
  const [queryparams, setQueryParams] = useState();
  const queryString = window.location.search;

  return { params: new URLSearchParams(queryString) };
};
