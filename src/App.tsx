import React from 'react';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
    return (
        <div className="min-h-screen transition-colors duration-300 bg-lightBackground dark:bg-darkBackground text-textColor dark:text-darkTextColor">
            <ThemeToggle />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Personal Space</h1>
                <p className="mb-4">This is your personal space for managing tasks, grocery lists, and more.</p>
                <button className="bg-primary text-white py-2 px-4 rounded hover:bg-teal-600 dark:hover:bg-teal-400">Add Task</button>
            </div>
        </div>
    );
};

export default App;
