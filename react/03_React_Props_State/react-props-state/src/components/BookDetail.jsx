// src/components/BookDetail.js
import React, { useState } from 'react';

const BookDetail = ({ title, author, year, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
      {showDetails && (
        <div>
          {/* Additional details go here */}
          <p>Description: Lorem ipsum dolor sit amet.</p>
          <p>Genre: Fiction</p>
        </div>
      )}
      <button onClick={onDelete}>Delete</button>
      <button onClick={toggleDetails}>Toggle Details</button>
    </div>
  );
};

export default BookDetail;
