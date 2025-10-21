// src/components/FavoriteCities.jsx
import React from 'react';

// Загальний стиль для кнопок
const baseButton = "py-2 px-4 rounded-lg font-semibold transition-colors";
const primaryButton = `${baseButton} bg-green-500 hover:bg-green-600 text-white`;
const secondaryButton = `${baseButton} bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600`;
const dangerButton = "bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg text-sm transition-colors";

const FavoriteCities = ({ onNavigate, cities, setCities }) => {
  const [newCity, setNewCity] = React.useState('');

  const handleAddCity = () => {
    if (newCity.trim() !== '') {
      setCities([...cities, newCity]);
      setNewCity('');
    }
  };

  const handleRemoveCity = (city) => {
    setCities(cities.filter(c => c !== city));
  };

  return (
    <div className="favorite-cities">
      <h2 className="text-3xl font-bold mb-4">Улюблені міста</h2>

      {/* Контейнер для таблиці, щоб вона була адаптивною */}
      <div className="overflow-x-auto rounded-lg border dark:border-gray-700 mb-6">
        {/* w-full: ширина 100%, border-collapse: "склеює" рамки */}
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">Місто</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">Дії</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {cities.map((city, i) => (
              <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="p-3">{city}</td>
                <td className="p-3">
                  <button onClick={() => handleRemoveCity(city)} className={dangerButton}>
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
        <button onClick={handleAddCity} className={primaryButton}>
          Додати
        </button>
      </div>
      
      <button onClick={() => onNavigate('dashboard')} className={secondaryButton}>
        Назад
      </button>
    </div>
  );
};

export default FavoriteCities;