// src/components/Forecast.jsx
import React from 'react';

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
    <h2>Прогноз погоди</h2>
    <input 
        value={filter} 
        onChange={handleFilterChange} 
        placeholder="Фільтр за умовами" 
    />
    <button onClick={handleClear}>Очистити</button>
    <table>
        <thead>
        <tr>
            <th>День</th>
            <th>Температура</th>
            <th>Умови</th>
        </tr>
        </thead>
        <tbody>
        {filteredData.map((f) => (
            <tr key={f.day}>
            <td>День {f.day}</td>
            <td>{f.temp}°C</td>
            <td>{f.condition}</td>
            </tr>
        ))}
        </tbody>
    </table>
    <button onClick={() => onNavigate('dashboard')}>Назад</button>
    </div>
);
};

export default ForecastComponent;