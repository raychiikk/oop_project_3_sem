// src/components/Forecast.jsx
import React from 'react';

// Стилі кнопок
const secondaryButton = "py-2 px-4 rounded-lg font-semibold transition-colors bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600";

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

  return (
    <div className="forecast">
      <h2 className="text-3xl font-bold mb-4">Прогноз погоди</h2>

      <div className="flex flex-wrap gap-2 mb-6">
        <input 
          value={filter} 
          onChange={handleFilterChange} 
          placeholder="Фільтр за умовами" 
          className="border dark:bg-gray-700 dark:border-gray-600 rounded-lg p-2 flex-grow"
        />
        <button onClick={handleClear} className={secondaryButton}>
          Очистити
        </button>
      </div>
      
      <div className="overflow-x-auto rounded-lg border dark:border-gray-700 mb-6">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">День</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">Температура</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">Умови</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {filteredData.map((f) => (
              <tr key={f.day} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="p-3">День {f.day}</td>
                <td className="p-3">{f.temp}°C</td>
                <td className="p-3">{f.condition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button onClick={() => onNavigate('dashboard')} className={secondaryButton}>
        Назад
      </button>
    </div>
  );
};

export default ForecastComponent;