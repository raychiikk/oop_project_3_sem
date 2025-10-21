// src/components/Statistics.jsx
import React from 'react';

// Стилі кнопок
const secondaryButton = "py-2 px-4 rounded-lg font-semibold transition-colors bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600";

const Statistics = ({ onNavigate }) => {
  const [chartType, setChartType] = React.useState('temperature');
  const [weatherData] = React.useState([
    { temp: 20, humidity: 60, windSpeed: 5 },
    { temp: 22, humidity: 55, windSpeed: 7 },
    { temp: 18, humidity: 80, windSpeed: 10 },
    { temp: 19, humidity: 70, windSpeed: 8 },
    { temp: 21, humidity: 65, windSpeed: 6 },
  ]);

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const getStatistics = () => {
    let values;
    let label;
    let unit;

    if (chartType === 'temperature') {
      values = weatherData.map(w => w.temp);
      label = 'Середня температура';
      unit = '°C';
    } else if (chartType === 'humidity') {
      values = weatherData.map(w => w.humidity);
      label = 'Середня вологість';
      unit = '%';
    } else {
      values = weatherData.map(w => w.windSpeed);
      label = 'Середня швидкість вітру';
      unit = 'м/с';
    }

    const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);
    return `${label}: ${avg}${unit}`;
  };

  const currentLabel = chartType === 'temperature' ? 'Температура' : chartType === 'humidity' ? 'Вологість' : 'Швидкість вітру';

  return (
    <div className="statistics">
      <h2 className="text-3xl font-bold mb-4">Статистика погоди</h2>
      
      <select 
        value={chartType} 
        onChange={handleChartTypeChange}
        className="border dark:bg-gray-700 dark:border-gray-600 rounded-lg p-2 mb-6 w-full md:w-auto"
      >
        <option value="temperature">Температура</option>
        <option value="humidity">Вологість</option>
        <option value="windSpeed">Швидкість вітру</option>
      </select>
      
      {/* Імітація "картки" для графіка/статистики */}
      <div className="h-auto w-full border border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-center">{getStatistics()}</h3>
        
        {/* Таблиця для даних */}
        <div className="overflow-x-auto max-w-sm mx-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="p-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">День</th>
                <th className="p-2 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">{currentLabel}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              {weatherData.map((w, i) => (
                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-2">День {i + 1}</td>
                  <td className="p-2">
                    {chartType === 'temperature' 
                      ? `${w.temp}°C` 
                      : chartType === 'humidity'
                      ? `${w.humidity}%`
                      : `${w.windSpeed} м/с`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <button onClick={() => onNavigate('dashboard')} className={secondaryButton}>
        Назад
      </button>
    </div>
  );
};

export default Statistics;