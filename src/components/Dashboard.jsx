import React from 'react';

// приймає об'єкт weather та функцію onUpdate
const Dashboard = ({ onNavigate, weather, onUpdate }) => {
return (
    <div className="dashboard">
    <h2 className="text-3xl font-bold mb-6">Поточна погода</h2>
    
    <div className="flex flex-wrap items-center gap-2 mb-6">
        <input 
        value={weather.getTemperature() > 15 ? "Київ" : "Львів"} 
        readOnly 
        className="border dark:bg-gray-700 dark:border-gray-600 rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <button 
        onClick={onUpdate}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-sm"
        >
        Оновити 
        </button>
    </div>

    {/*блок для погоди - "Hero" секція */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-lg mb-8 shadow-inner text-center">
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Температура</p>
        <p className="text-7xl font-bold text-blue-600 dark:text-blue-400 my-2">
            {weather.getTemperature()}°C
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-400">
            {weather.getWeatherSummary()}
        </p>
    </div>

    {/*обгортка для кнопок навігації */}
    <div className="flex flex-col sm:flex-row gap-4">
        <button 
        onClick={() => onNavigate('forecast')}
        className="flex-grow text-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-3 px-5 rounded-lg transition-colors font-medium shadow-sm"
        >
        Прогноз
        </button>
        <button 
        onClick={() => onNavigate('cities')}
        className="flex-grow text-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-3 px-5 rounded-lg transition-colors font-medium shadow-sm"
        >
        Міста
        </button>
        <button 
        onClick={() => onNavigate('stats')}
        className="flex-grow text-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-3 px-5 rounded-lg transition-colors font-medium shadow-sm"
        >
        Статистика
        </button>
    </div>
    </div>
);
};

export default Dashboard;