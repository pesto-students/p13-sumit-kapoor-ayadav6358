// src/components/BookForm.js
import React, { useState } from 'react';

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') setTitle(value);
    else if (name === 'author') setAuthor(value);
    else if (name === 'year') setYear(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author, year });
    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={author} onChange={handleChange} />
      </label>
      <label>
        Year:
        <input type="text" name="year" value={year} onChange={handleChange} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
