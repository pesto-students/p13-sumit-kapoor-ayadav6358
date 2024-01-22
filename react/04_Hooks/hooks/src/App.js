// App.js or your root component
import React from 'react';
import BookList from './components/BookList';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BookList />
      {/* Other components */}
    </ThemeProvider>
  );
};

export default App;
