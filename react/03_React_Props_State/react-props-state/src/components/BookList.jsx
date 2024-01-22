// src/components/BookList.js
import React, { useState } from 'react';
import BookDetail from './BookDetail';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const deleteBook = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  return (
    <div>
      <BookForm addBook={addBook} />
      {books.length === 0 ? (
        <p>The book list is currently empty.</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <BookDetail
                title={book.title}
                author={book.author}
                year={book.year}
                onDelete={() => deleteBook(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
