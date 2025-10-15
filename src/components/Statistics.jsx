// src/components/Statistics.jsx
import React from 'react';

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

return (
    <div className="statistics">
        <h2>Статистика погоди</h2>
        <select value={chartType} onChange={handleChartTypeChange}>
        <option value="temperature">Температура</option>
        <option value="humidity">Вологість</option>
        <option value="windSpeed">Швидкість вітру</option>
        </select>
    <div style={{ 
        height: '200px', 
        width: '400px', 
        border: '1px solid black',
        padding: '20px',
        margin: '20px 0'
    }}>
        <h3>{getStatistics()}</h3>
        <table>
        <thead>
            <tr>
            <th>День</th>
            <th>{chartType === 'temperature' ? 'Температура' : chartType === 'humidity' ? 'Вологість' : 'Швидкість вітру'}</th>
            </tr>
        </thead>
        <tbody>
            {weatherData.map((w, i) => (
            <tr key={i}>
                <td>День {i + 1}</td>
                <td>
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
    <button onClick={() => onNavigate('dashboard')}>Назад</button>
    </div>
);
};

export default Statistics;