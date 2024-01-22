import { useEffect, useState } from 'react';

const BookDataLoader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating fetching data
    // const fetchData = async () => {
      // Replace with actual API call or data source
      // const response = await fetch('https://api.example.com/books');
      const result = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2018 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
        // Add more books if you'd like
      ]
      setData(result);
    // };

    // fetchData();
  }, []);

  // return data;
};

export default BookDataLoader;
