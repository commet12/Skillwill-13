import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const vanDijk = localStorage.getItem('theme');
    if (vanDijk === 'dark' && window.innerWidth > 768) {
      setDarkMode(true);
    }
  }, []);

  const toggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  return (
    <div className={`App ${darkMode && window.innerWidth > 768 ? 'dark-mode' : ''}`}>
      <header>
        <h1>Click below</h1>
        <button onClick={toggle}>Toggle Theme</button>
      </header>
      
        <p>
          9dan 8 rom movigot evroturnirze gavalt.
        </p>
      
    </div>
  );
}

export default App;


