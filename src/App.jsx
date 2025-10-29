import './App.css'; 
import React from 'react';
import Dashboard from './components/Dashboard';
import ForecastComponent from './components/Forecast';
import FavoriteCities from './components/FavoriteCities';
import Statistics from './components/Statistics';
import { WeatherService } from './JS/WeatherService';

function App() {
const [currentScreen, setCurrentScreen] = React.useState('dashboard');

// використовуємо WeatherService для всієї бізнес-логіки
const [weatherService] = React.useState(() => new WeatherService());

// стани для даних з сервісу
const [cities, setCities] = React.useState(() => weatherService.getFavoriteCities());
const [weather, setWeather] = React.useState(() => weatherService.getCurrentWeather());
const [stats] = React.useState(() => weatherService.getStatistics());

const handleThemeToggle = () => {
    document.documentElement.classList.toggle('dark');
};

// обробники подій, які викликають методи сервісу
const handleAddCity = (cityName) => {
    weatherService.addCity(cityName);
    setCities([...weatherService.getFavoriteCities()]);
};

const handleRemoveCity = (cityName) => {
    weatherService.removeCity(cityName);
    setCities([...weatherService.getFavoriteCities()]);
};

    const handleUpdateWeather = () => {
    const newWeather = weatherService.updateWeather();
    setWeather(newWeather);
};

const renderScreen = () => {
    switch (currentScreen) {
    case 'dashboard': 
        return <Dashboard 
        onNavigate={setCurrentScreen} 
        weather={weather} 
        onUpdate={handleUpdateWeather} 
        />;
    case 'forecast': 
        return <ForecastComponent onNavigate={setCurrentScreen} />;
    case 'cities': 
        return <FavoriteCities 
        onNavigate={setCurrentScreen} 
        cities={cities} 
        onAddCity={handleAddCity} 
        onRemoveCity={handleRemoveCity} 
        />;
    case 'stats': 
        return <Statistics onNavigate={setCurrentScreen} stats={stats} />;
    default: 
        return <Dashboard 
        onNavigate={setCurrentScreen} 
        weather={weather} 
        onUpdate={handleUpdateWeather} 
        />;
    }
};

return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-150">
    <div className="container max-w-5xl mx-auto p-4">
        
        <header className="flex justify-between items-center py-4 mb-6">
        <section className="flex items-center space-x-3">
            <img src="/IMAGES/weather-icon.webp" alt="Weather Vibes Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Weather Vibes</h1>
        </section>
        
        {/*ОНОВЛЕНИЙ ПЕРЕМИКАЧ ТЕМИ (ЗАМІСТЬ КНОПКИ)*/}
        <label htmlFor="theme-toggle-input" className="relative inline-flex items-center cursor-pointer" title="Перемикнути тему">
        <input 
            type="checkbox" 
            id="theme-toggle-input" 
            className="sr-only peer" // sr-only = 'screen-reader only', ховає його, але лишає доступним
            onChange={handleThemeToggle} // викликаємо існуючу функцію
        />
          {/* смужка-фон */}
        <div className="w-11 h-6 bg-gray-200 rounded-full peer 
                        dark:bg-gray-700 
                        peer-checked:bg-blue-600">
        </div>
          {/* бігунок (коло) */}
          <div className="absolute top-0.5 left-[2px] bg-white border-gray-300 border rounded-full 
                        h-5 w-5 transition-all duration-300 
                        peer-checked:translate-x-full peer-checked:border-white">
          </div>
        </label>

        </header>

        <nav className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
            <div className="flex gap-2 w-full md:w-auto">
            <input 
                type="text" 
                placeholder="Пошук місця" 
                className="nav__input border rounded-lg p-2 w-full flex-grow dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                id="cityInput" 
            />
            <button 
                className="nav__btn-search bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm"
                onClick={() => setCurrentScreen('dashboard')}
            >
                Пошук
            </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="current_place flex items-center">
                    <img src="images/sun.png" alt="Location" className="w-4 h-4 mr-1.5" />
                    Київ
                </div>
                <div className="current_date flex items-center">
                    <img src="images/calendar-icon.svg" alt="Calendar" className="w-4 h-4 mr-1.5" />
                    Сьогодні, 7 Листопада
                </div>
            </div>
        </div>

        <nav className="header__nav">
            <ul className="header__menu flex flex-wrap gap-x-2 gap-y-2 justify-center md:justify-start">
            <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('dashboard'); }} className="py-2 px-3 rounded-md font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('forecast'); }} className="py-2 px-3 rounded-md font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">Прогноз</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('cities'); }} className="py-2 px-3 rounded-md font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">Міста</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('stats'); }} className="py-2 px-3 rounded-md font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">Статистика</a></li>
            </ul>
        </nav> 
        </nav>

        <main className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        {renderScreen()}
        </main>

        <p className="footer__info text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
        © Weather Vibes by Cherhinets Yuliia
        </p>
    </div>
    </div>
);
}

export default App;
