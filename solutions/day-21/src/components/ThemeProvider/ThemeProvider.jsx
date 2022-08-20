import { useState } from 'react';
import { ThemeContext, ThemeUpdaterContext } from '@/context/theme';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdaterContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdaterContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;