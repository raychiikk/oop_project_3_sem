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
    <h2>Погода в {city}</h2>
    <input value={city} onChange={handleCityChange} placeholder="Введіть місто" />
    <button onClick={handleUpdate}>Оновити</button>
    <p>Температура: {temperature}°C</p>
    <p>Умови: Сонячно</p>
    <button onClick={() => onNavigate('forecast')}>Прогноз</button>
    <button onClick={() => onNavigate('cities')}>Міста</button>
    <button onClick={() => onNavigate('stats')}>Статистика</button>
    </div>
);
};

export default Dashboard;