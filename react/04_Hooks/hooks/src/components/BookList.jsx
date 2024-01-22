import React, { useState, useEffect, useContext } from 'react';
import BookDataLoader from './BookDataLoader';
import { useBookFilter } from '../hooks/useBookFilter';
import { useBookSorter } from '../hooks/useBookSorter';
import { ThemeContext } from '../context/ThemeContext';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useContext(ThemeContext);

  const filteredBooks = useBookFilter(books, searchTerm);
  const sortedBooks = useBookSorter(filteredBooks);

  useEffect(() => {
    // Simulating fetching data
    const data = [
      { title: 'Book 1', author: 'Author 1', year: 2020 },
      { title: 'Book 2', author: 'Author 2', year: 2018 },
      { title: 'Book 3', author: 'Author 3', year: 2022 },
      // Add more books if you'd like
    ]
    debugger;
    setBooks(data);
    // BookDataLoader() => setBooks(data));
  }, []);

  return (
    // className={`book-list ${theme}`}
    <div >
      <input
        type="text"
        placeholder="Search Books"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {sortedBooks.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
