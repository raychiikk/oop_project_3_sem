import React from 'react';

// стилі кнопок
const dangerButton = "bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-3 rounded-md text-sm transition-colors shadow-sm";
const primaryButton = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors shadow-sm";
const secondaryButton = "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-2 px-4 rounded-lg transition-colors shadow-sm";

// приймає масив cities (об'єкти City) та функції-обробники
const FavoriteCities = ({ onNavigate, cities, onAddCity, onRemoveCity }) => {
const [newCity, setNewCity] = React.useState(''); // Цей стан - локальний, це ОК

const handleAddClick = () => {
    if (newCity.trim() !== '') {
    onAddCity(newCity); // викликаємо функцію з App.jsx
    setNewCity('');
    }
};

// функція видалення тепер просто викликає prop
const handleRemoveClick = (cityName) => {
    onRemoveCity(cityName); // викликаємо функцію з App.jsx
};

return (
    <div className="favorite-cities">
    <h2 className="text-3xl font-bold mb-6">Улюблені міста</h2>
    
    {/* додано shadow-sm до обгортки таблиці */}
    <div className="overflow-x-auto rounded-lg border dark:border-gray-700 mb-6 shadow-sm">
        <table className="w-full">
        <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
            {/* додано tracking-wider для кращого вигляду заголовків */}
            <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Місто</th>
            <th className="p-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Дії</th>
            </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {/* тепер cities - це масив об'єктів City */}
            {cities.map((city, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                {/* викликаємо методи нашого об'єкта City */}
                <td className="p-3 whitespace-nowrap">{city.getLocationDetails()}</td>
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
        className="border dark:bg-gray-700 dark:border-gray-600 rounded-lg p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500" 
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