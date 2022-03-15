import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const queryList = window.matchMedia(query);
    setMatches(queryList.matches);

    const listener = (evt) => setMatches(evt.matches);

    queryList.addListener(listener);
    return () => queryList.removeListener(listener);
  }, [query]);
  return matches;
};

export const dateFormat = (date) => {
  const init = date.slice(0, 10);
  const day = init.split("-")[2];
  const month = init.split("-")[1];
  const year = init.split("-")[0];
  return `${day}-${month}-${year}`;
};

export const useOpenAlertState = () => {
  const [isAlertOpen, setIsAlertopen] = useState(false);

  const openAlert = useCallback(() => setIsAlertopen(true), []);
  const closeAlert = useCallback(() => setIsAlertopen(false), []);

  return { openAlert, closeAlert, isAlertOpen };
};
