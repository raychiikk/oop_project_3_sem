// src/components/FavoriteCities.jsx
import React from 'react';

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
    <h2>Улюблені міста</h2>
    <table>
        <thead>
        <tr>
            <th>Місто</th>
            <th>Дії</th>
        </tr>
        </thead>
        <tbody>
        {cities.map((city, i) => (
            <tr key={i}>
            <td>{city}</td>
            <td><button onClick={() => handleRemoveCity(city)}>Видалити</button></td>
            </tr>
        ))}
        </tbody>
    </table>
    <input 
        value={newCity} 
        onChange={(e) => setNewCity(e.target.value)} 
        placeholder="Нове місто" 
    />
    <button onClick={handleAddCity}>Додати</button>
    <button onClick={() => onNavigate('dashboard')}>Назад</button>
    </div>
);
};

export default FavoriteCities;