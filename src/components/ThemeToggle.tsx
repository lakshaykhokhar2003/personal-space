import { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className={`fixed top-4 right-4 p-2 rounded ${theme === 'light' ? 'bg-primary text-white' : 'bg-darkBackground text-darkTextColor'}`}>
            Toggle Theme
        </button>
    );
};

export default ThemeToggle;
