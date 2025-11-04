import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WeatherIcon = ({ condition }) => {
    const lowerCaseCondition = condition.toLowerCase();
    
    if (lowerCaseCondition.includes('сонячно')) {
        return (
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591M12 12a2.25 2.25 0 00-2.25 2.25 2.25 2.25 0 002.25 2.25 2.25 2.25 0 002.25-2.25A2.25 2.25 0 0012 12z" />
                </svg>
                <span>{condition}</span>
            </div>
        );
    }
    if (lowerCaseCondition.includes('дощ')) {
        return (
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75A5.25 5.25 0 0015 7.5a5.25 5.25 0 00-5.25-5.25A5.25 5.25 0 003.75 7.5c0 1.841 1.003 3.46 2.409 4.309" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5l-1.5-1.5m3 3l-1.5-1.5m-1.5-6l1.5-1.5m3 3l1.5-1.5" />
                </svg>
                <span>{condition}</span>
            </div>
        );
    }
    if (lowerCaseCondition.includes('хмарно')) {
        return (
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.758 4.5 4.5 0 00-8.332-3.007.524.524 0 00-.023.235A2.25 2.25 0 005.25 9H3.75a3 3 0 00-3 3v.75z" />
                </svg>
                <span>{condition}</span>
            </div>
        );
    }
    // запасний варіант, якщо іконка не знайдена
    return <span>{condition}</span>;
};

// стилі кнопок (додано shadow-sm)
const secondaryButton = "py-2 px-4 rounded-lg font-semibold transition-colors bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 shadow-sm";

const ForecastComponent = ({ onNavigate }) => {
const [forecastData] = React.useState([
    { day: 1, temp: 20, condition: 'Сонячно' },
    { day: 2, temp: 22, condition: 'Сонячно' },
    { day: 3, temp: 18, condition: 'Дощ' },
    { day: 4, temp: 19, condition: 'Хмарно' },
    { day: 5, temp: 21, condition: 'Сонячно' },
]);
const [filter, setFilter] = React.useState('');

const handleFilterChange = (e) => setFilter(e.target.value);
const filteredData = forecastData.filter(f => 
    f.condition.toLowerCase().includes(filter.toLowerCase())
);
const handleClear = () => setFilter('');

// Об'єкт стилю для плавної анімації крапок ===
const dotStyle = {
    transition: 'r 0.2s ease-in-out, fill 0.2s ease-in-out, stroke 0.2s ease-in-out'
};

// Функція для динамічних класів рядка таблиці ===
const getTempRowClass = (temp) => {
    // Базові стилі + плавний перехід кольору
    let baseStyle = "transition-colors duration-150"; 
    
    if (temp >= 22) {
        // Теплий колір (злегка червоний)
        return baseStyle + " bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/40"; 
    }
    if (temp <= 18) {
        // Холодний колір (злегка синій)
        return baseStyle + " bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/40"; 
    }
    // Нейтральний колір
    return baseStyle + " bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"; 
};


return (
    <div className="forecast">
    <h2 className="text-3xl font-bold mb-6">Прогноз погоди</h2>

    <div className="flex flex-wrap gap-2 mb-6">
        <input 
        value={filter} 
        onChange={handleFilterChange} 
        placeholder="Фільтр за умовами" 
        className="border dark:bg-gray-700 dark:border-gray-600 rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleClear} className={secondaryButton}>
        Очистити
        </button>
    </div>
    
    {/* додано shadow-sm до обгортки таблиці */}
    <div className="overflow-x-auto rounded-lg border dark:border-gray-700 mb-6 shadow-sm">
        <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
            <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">День</th>
            <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Температура</th>
            <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Умови</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {filteredData.map((f) => (
            // динамічно додаємо клас фону залежно від температури
            <tr key={f.day} className={getTempRowClass(f.temp)}>
                <td className="p-3 whitespace-nowrap">День {f.day}</td>
                <td className="p-3 whitespace-nowrap">{f.temp}°C</td>
                <td className="p-3 whitespace-nowrap">
                    {/* використовуємо наш новий компонент з іконками */}
                    <WeatherIcon condition={f.condition} />
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    
    {/* Графік*/}
    <h3 className="text-2xl font-bold mb-4 mt-8">Графік температури</h3>
    <div className="w-full h-80 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-md">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={filteredData} 
                margin={{ top: 5, right: 20, left: -20, bottom: 5 }} 
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#555" /> 
                <XAxis dataKey="day" 
                    tickFormatter={(day) => `День ${day}`} 
                    stroke="rgb(156 163 175)" /> 
                <YAxis stroke="rgb(156 163 175)" 
                    tickFormatter={(temp) => `${temp}°C`} />
                <Tooltip 
                    contentStyle={{ backgroundColor: '#283242', borderRadius: '5px' }} 
                    labelStyle={{ color: 'white' }}
                />
                <Legend /> 
                <Line 
                    type="monotone" 
                    dataKey="temp" 
                    stroke="#3b82f6" 
                    strokeWidth={2} 
                    name="Температура"
                    animationDuration={1000} 

                    // Плавна анімація крапок
                    dot={{
                        r: 4,
                        fill: '#3b82f6',        
                        stroke: '#3b82f6',     
                        strokeWidth: 2,        
                        style: dotStyle        
                    }} 
                    activeDot={{
                        r: 8,
                        fill: 'white',         
                        stroke: '#3b82f6',    
                        strokeWidth: 2,
                        style: dotStyle        
                    }} 
                />
            </LineChart>
        </ResponsiveContainer>
    </div>

    <button onClick={() => onNavigate('dashboard')} className={secondaryButton + " mt-6"}>
        Назад
    </button>
    </div>
);
};

export default ForecastComponent;

