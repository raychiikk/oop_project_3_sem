import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// стилі кнопок (додано shadow-sm)
const secondaryButton = "py-2 px-4 rounded-lg font-semibold transition-colors bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-sm";

// Кольори для діаграми 
// Жовтий для "Сонячно", Синій для "Дощ", сірий про всяк випадок
const COLORS = ['#FFBB28', '#0088FE', '#FF8042'];

/**
 * компонент статистики.
 * приймає простий об'єкт `stats` з готовими даними з WeatherService
 */
const Statistics = ({ onNavigate, stats }) => {
    
    // stats тепер містить:
    // stats.averageIntensity
    // stats.totalDays
    // stats.conditionData = [ { name: 'Сонячно', value: 2 }, { name: 'Дощ', value: 2 } ]
    
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

            {/* Кругова діаграма*/}
            <h3 className="text-2xl font-bold mb-4 mt-8">Співвідношення умов (прогноз)</h3>
            <div className="w-full h-80 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        {/* dataKey="value" каже діаграмі, яке поле брати для розрахунку відсотків */}
                        <Pie
                            data={stats.conditionData}
                            dataKey="value"
                            nameKey="name" // nameKey="name" каже, яке поле брати для підписів
                            cx="50%" // Центрування по X
                            cy="50%" // Центрування по Y
                            outerRadius={100} // Розмір самої діаграми
                            fill="#8884d8"
                            label // Вмикає підписи (наприклад, "50%")
                        >
                            {/* Цей .map потрібен, щоб розфарбувати кожен шматок діаграми */}
                            {stats.conditionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        
                        {/* Стиль для Tooltip */}
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: '#283242', 
                                borderRadius: '5px',
                                border: 'none' // Прибираємо стандартну рамку
                            }} 
                            labelStyle={{ color: 'white' }}
                            itemStyle={{ color: 'white' }} // Робить текст ("Сонячно: 2") білим
                        />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        
            <button 
                onClick={() => onNavigate('dashboard')} 
                className={secondaryButton + " mt-6"} // Додаємо відступ
            >
                Назад
            </button>
        </div>
    );
};

export default Statistics;


