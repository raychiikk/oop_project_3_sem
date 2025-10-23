// src/App.jsx
import './App.css'; 
import React from 'react';
import Dashboard from './components/Dashboard';
import ForecastComponent from './components/Forecast';
import FavoriteCities from './components/FavoriteCities';
import Statistics from './components/Statistics';

function App() {
  const [currentScreen, setCurrentScreen] = React.useState('dashboard');
  const [cities, setCities] = React.useState(['Київ', 'Львів', 'Одеса']);

  // Нова функція для перемикання теми, яка працює з Tailwind
  const handleThemeToggle = () => {
    // Вона додає/видаляє клас 'dark' з тегу <html>
    document.documentElement.classList.toggle('dark');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard': 
        return <Dashboard onNavigate={setCurrentScreen} cities={cities} />;
      case 'forecast': 
        return <ForecastComponent onNavigate={setCurrentScreen} />;
      case 'cities': 
        return <FavoriteCities onNavigate={setCurrentScreen} cities={cities} setCities={setCities} />;
      case 'stats': 
        return <Statistics onNavigate={setCurrentScreen} />;
      default: 
        return <Dashboard onNavigate={setCurrentScreen} cities={cities} />;
    }
  };

  return (
    // Загальний фон, який реагує на темну тему
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-150">
      
      {/* Контейнер, що центрує вміст і обмежує ширину */}
      <div className="container max-w-5xl mx-auto p-4">
        
        {/* HEADER: Logo + Name + Theme Button */}

        <header className="flex justify-between items-center py-4 mb-6">
          <section className="flex items-center space-x-3">
            <img src="/IMAGES/weather-icon.webp" alt="Weather Vibes Logo" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Weather Vibes</h1>
          </section>
          
          <button 
            id="theme-toggle" 
            onClick={handleThemeToggle} // Використовуємо нову функцію
            className="py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Перемикнути тему
          </button>
        </header>

        {/* Панель Навігації: Пошук + Інфо + Лінки */}
        <nav className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mb-6">
          {/* Верхній ряд: Пошук та Інфо */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
            {/* Секція Пошуку */}
            <div className="flex gap-2 w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Пошук місця" 
                className="nav__input border rounded-lg p-2 w-full flex-grow dark:bg-gray-700 dark:border-gray-600" 
                id="cityInput" 
              />
              <button 
                className="nav__btn-search bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => setCurrentScreen('dashboard')}
              >
                Пошук
              </button>
            </div>
            
            {/* Секція Інфо */}
            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="current_place">📍 Київ</div>
              <div className="current_date">📅 Сьогодні, 7 Листопада</div>
            </div>
          </div>

          {/* Нижній ряд: Навігаційні посилання */}
          <nav className="header__nav">
            <ul className="header__menu flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('dashboard'); }} className="font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('forecast'); }} className="font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500">Прогноз</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('cities'); }} className="font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500">Міста</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('stats'); }} className="font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500">Статистика</a></li>
            </ul>
          </nav> 
        </nav>

        {/* Основний контент (картка для екранів) */}
        <main className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {renderScreen()}
        </main>

        {/* {FOOTER} */}

        <p className="footer__info text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          © Weather Vibes by Cherhinets Yuliia
        </p>
      </div>
    </div>
  );
}

export default App;
