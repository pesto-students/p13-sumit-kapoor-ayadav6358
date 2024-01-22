// src/components/BookList.js
import React, { Component } from 'react';
import BookDetail from './BookDetail';
import WithLogging from './WithLogging';

class BookList extends Component {
  render() {
    const books = [
      { title: 'Book 1', author: 'Author 1', year: 2020 },
      { title: 'Book 2', author: 'Author 2', year: 2018 },
      { title: 'Book 3', author: 'Author 3', year: 2022 },
      // Add more books if you'd like
    ];

    return (
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <BookDetail title={book.title} author={book.author} year={book.year} />
          </li>
        ))}
      </ul>
    );
  }
}

export default WithLogging(BookList);
