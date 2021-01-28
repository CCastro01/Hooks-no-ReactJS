import { useEffect, useState } from "react";

type Theme = 'dark' | 'light';

export default function useTheme(defaultTheme?: Theme){
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('@hooks:theme') || (defaultTheme || 'dark');
    });

    function toggleTheme(){
        setTheme(oldState => {
            return oldState === 'light' ? 'dark' : 'light';
        });
    }


    useEffect(() => {
        localStorage.setItem('@hooks:theme', theme);
    }, [theme])


    return {theme, toggleTheme};
}