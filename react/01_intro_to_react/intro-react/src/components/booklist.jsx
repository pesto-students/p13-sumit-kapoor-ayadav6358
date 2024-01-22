
import React from 'react'
import Book from './book';

function BookList() {
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        // Add more books if you'd like
      ];
  return (
    <div>
        <ul>
            {books.map((item, index)=><li key={index}>
            <Book item={item}/>
            </li>)}
        </ul>
    </div>
  )
}

export default BookList