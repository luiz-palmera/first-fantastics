import { createContext, useEffect, useState, type ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../theme/light";
import { darkTheme } from "../theme/dark";

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    mode: 'light',
    toggleTheme: () => {}
});

export function CustomThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<ThemeMode>('light');

    useEffect(() => {
        const savedMode = localStorage.getItem('themeMode') as ThemeMode;
        if (savedMode) {
            setMode(savedMode);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setMode(prefersDark ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('themeMode', newMode);
    };

    const theme = mode === 'light' ? lightTheme : darkTheme;    

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}