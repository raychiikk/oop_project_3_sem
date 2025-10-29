import React from 'react';

// стилі кнопок (додано shadow-sm)
const secondaryButton = "py-2 px-4 rounded-lg font-semibold transition-colors bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-sm";

/**
 * компонент статистики.
 * приймає простий об'єкт `stats` з готовими даними з WeatherService
 */
const Statistics = ({ onNavigate, stats }) => {
    
    // вся логіка розрахунків (getStatistics) тепер у WeatherService
    // цей компонент "тупий" і лише відображає дані
    
    return (
        <div className="statistics">
            <h2 className="text-3xl font-bold mb-6">Статистика погоди</h2>
            
            {/*використовуємо сітку (grid) для двох окремих "стат-карток".*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                
                {/* Stat Card 1 */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Середня інтенсивність
                    </h3>
                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                        {stats.averageIntensity}
                    </p>
                </div>
                
                {/* Stat Card 2 */}
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Днів у прогнозі
                    </h3>
                    <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                        {stats.totalDays}
                    </p>
                </div>
                
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
