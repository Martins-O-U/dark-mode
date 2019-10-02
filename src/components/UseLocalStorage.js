import {useState} from 'react';

const useLocalStorage = (key, initialValue)=>{
    const [storedValue, setStoredValue] = useState(key, ()=>{
        const valueFromStorage = localStorage.getItem(key);
        return valueFromStorage? JSON.parse(valueFromStorage): initialValue
    })

    const setValue = (value)=>{
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value))
    }

    return[storedValue, setValue];
};


export default useLocalStorage;