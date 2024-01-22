import { useMemo } from 'react';

export const useBookFilter = (books, searchTerm) => {
  return useMemo(() => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [books, searchTerm]);
};
