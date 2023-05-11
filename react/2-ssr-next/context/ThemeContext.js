import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {

    const [theme, setTheme] = React.useState("dark");
    const Icon = theme === "dark" ? ModeNightIcon : WbSunnyIcon;

    React.useEffect(() => {
        const saved_theme = localStorage.getItem("nextjs-theme");

        if (!saved_theme) {
            localStorage.setItem("nextjs-theme", "dark");
            return;
        }

        if (saved_theme === "light") {
            document.body.classList.remove("dark");
            setTheme(saved_theme);
        }

    }, []);

    function toggle() {

        let new_value = theme === 'light' ? "dark" : "light";

        if (theme === "dark") {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }

        localStorage.removeItem("nextjs-theme", theme);
        localStorage.setItem("nextjs-theme", new_value);
        setTheme(new_value);
    }

    function ThemeButton() {
        return (
            <IconButton onClick={toggle}>
                <Icon className='text-stone-900 dark:text-white' />
            </IconButton>
        )
    }

    return (
        <ThemeContext.Provider value={{ ThemeButton }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return React.useContext(ThemeContext);
}