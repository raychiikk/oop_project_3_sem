// src/components/Dashboard.jsx
import React from 'react';

// Приймає об'єкт weather та функцію onUpdate
const Dashboard = ({ onNavigate, weather, onUpdate }) => {
return (
    <div className="dashboard">
    <h2 className="text-3xl font-bold mb-4">Поточна погода</h2>
    
    <div className="flex flex-wrap items-center gap-2 mb-6">
        <input 
        value={weather.getTemperature() > 15 ? "Київ" : "Львів"} 
        readOnly 
        className="border dark:bg-gray-700 dark:border-gray-600 rounded-lg p-2 flex-grow" 
        />
        <button 
        onClick={onUpdate}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
        Оновити 
        </button>
    </div>

      {/* Викликаємо методи нашого об'єкта WeatherData */}
    <p className="text-2xl font-light mb-2">
        Температура: <span className="font-semibold text-blue-600 dark:text-blue-400">{weather.getTemperature()}°C</span>
    </p>
    
      {/* Викликаємо метод getWeatherSummary, який викликає describe() у WeatherCondition (поліморфізм!) */}
    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Умови: {weather.getWeatherSummary()}
    </p>

    <div className="flex flex-wrap gap-4">
        <button 
        onClick={() => onNavigate('forecast')}
        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-2 px-4 rounded-lg transition-colors"
        >
        Прогноз
        </button>
        <button 
        onClick={() => onNavigate('cities')}
        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-2 px-4 rounded-lg transition-colors"
        >
        Міста
        </button>
        <button 
        onClick={() => onNavigate('stats')}
        className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-2 px-4 rounded-lg transition-colors"
        >
        Статистика
        </button>
    </div>
    </div>
);
};

export default Dashboard;