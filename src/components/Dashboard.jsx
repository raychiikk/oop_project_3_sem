// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = ({ onNavigate, cities }) => {
  const [temperature, setTemperature] = React.useState(20);
  const [city, setCity] = React.useState(cities[0] || 'Київ');

  const handleUpdate = () => {
    setTemperature(Math.floor(Math.random() * 30));
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="dashboard">
      {/* text-3xl: великий, font-bold: жирний, mb-4: відступ знизу */}
      <h2 className="text-3xl font-bold mb-4">Погода в {city}</h2>
      
      {/* flex flex-wrap: дозволяє елементам переноситись на новий рядок на малих екранах */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <input 
          value={city} 
          onChange={handleCityChange} 
          placeholder="Введіть місто"
          className="border dark:bg-gray-700 dark:border-gray-600 rounded-lg p-2 flex-grow"
        />
        <button 
          onClick={handleUpdate}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Оновити
        </button>
      </div>
      
      <p className="text-2xl font-light mb-2">Температура: <span className="font-semibold text-blue-600 dark:text-blue-400">{temperature}°C</span></p>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Умови: Сонячно</p>
      
      {/* gap-4: відступи між кнопками */}
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