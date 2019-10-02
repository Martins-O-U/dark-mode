import React, { useState, useEffect } from 'react';


const useLocalStorage =(key, initialValue)=>{
  const [storedValue, setStoredValue] = useState(key, ()=>{
    const valueFromstorage = localStorage.getItem(key);
    return valueFromstorage ? JSON.parse(valueFromstorage): initialValue
  })

  const setValue = value => {
    setStoredValue(value); 
    localStorage.setItem(key, JSON.stringify(value)); 
  };

  return [storedValue, setValue];
}


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
