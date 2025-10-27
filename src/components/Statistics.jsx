// src/components/Statistics.jsx
import React from 'react';

// Стилі кнопок
const secondaryButton = "py-2 px-4 rounded-lg font-semibold transition-colors bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600";

/**
 * Компонент статистики.
 * Приймає простий об'єкт `stats` з готовими даними з WeatherService.
 */
const Statistics = ({ onNavigate, stats }) => {
    
    // Вся логіка розрахунків (getStatistics) тепер у WeatherService.
    // Цей компонент "тупий" і лише відображає дані.
    
    return (
        <div className="statistics">
            <h2 className="text-3xl font-bold mb-4">Статистика погоди</h2>
            
            {/* Ми прибрали <select> та таблицю, оскільки логіка
            тепер інкапсульована в сервісі.
            Компонент просто показує готові дані.
            */}
            
            {/* Імітація "картки" для статистики */}
            <div className="h-auto w-full border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 mb-6">
                
                {/* Просто відображаємо готові дані з об'єкта stats */}
                <h3 className="text-xl font-semibold mb-4 text-center">
                    Середня інтенсивність: {stats.averageIntensity}
                </h3>
                <h3 className="text-xl font-semibold mb-4 text-center">
                    Днів у прогнозі: {stats.totalDays}
                </h3>
            </div>
            
            <button 
                onClick={() => onNavigate('dashboard')} 
                className={secondaryButton}
            >
                Назад
            </button>
        </div>
    );
};

export default Statistics;
