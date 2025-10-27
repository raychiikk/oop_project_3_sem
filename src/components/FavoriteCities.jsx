// src/components/FavoriteCities.jsx
import React from 'react';

const dangerButton = "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-colors";
const primaryButton = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors";
const secondaryButton = "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-2 px-4 rounded-lg transition-colors";

// Приймає масив cities (об'єкти City) та функції-обробники
const FavoriteCities = ({ onNavigate, cities, onAddCity, onRemoveCity }) => {
  const [newCity, setNewCity] = React.useState(''); // Цей стан - локальний, це ОК

const handleAddClick = () => {
    if (newCity.trim() !== '') {
      onAddCity(newCity); // Викликаємо функцію з App.jsx
    setNewCity('');
    }
};

  // Функція видалення тепер просто викликає prop
const handleRemoveClick = (cityName) => {
    onRemoveCity(cityName); // Викликаємо функцію з App.jsx
};

return (
    <div className="favorite-cities">
    <h2 className="text-3xl font-bold mb-4">Улюблені міста</h2>
    
    <div className="overflow-x-auto rounded-lg border dark:border-gray-700 mb-6">
        <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
            <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">Місто</th>
            <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">Дії</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {/* Тепер cities - це масив об'єктів City */}
            {cities.map((city, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                {/* Викликаємо методи нашого об'єкта City */}
                <td className="p-3">{city.getLocationDetails()}</td>
                <td className="p-3">
                <button 
                    onClick={() => handleRemoveClick(city.getName())}
                    className={dangerButton}
                >
                    Видалити
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>

    <div className="flex flex-wrap gap-2 mb-6">
        <input 
        value={newCity} 
        onChange={(e) => setNewCity(e.target.value)}
        placeholder="Нове місто" 
        className="border dark:bg-gray-700 dark:border-gray-600 rounded-lg p-2 flex-grow" 
        />
        <button 
        onClick={handleAddClick}
        className={primaryButton}
        >
        Додати
        </button>
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

export default FavoriteCities;