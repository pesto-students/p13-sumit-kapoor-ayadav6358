import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Toggle Theme:</p>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
