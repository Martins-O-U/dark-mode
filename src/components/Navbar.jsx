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

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if(darkMode){
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [darkMode])

  return [darkMode, setDarkMode]
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
