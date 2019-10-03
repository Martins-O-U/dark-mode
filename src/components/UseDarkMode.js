import {useEffect} from 'react';
import useLocalStorage from './UseLocalStorage';


const useDarkMode =(key, initialValue)=>{
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

export default useDarkMode;
