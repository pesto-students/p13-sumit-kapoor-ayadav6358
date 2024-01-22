import { useMemo } from 'react';

export const useBookSorter = (books) => {
  return useMemo(() => {
    return [...books].sort((a, b) => a.title.localeCompare(b.title));
  }, [books]);
};
