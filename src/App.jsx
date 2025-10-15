// src/App.jsx
import './App.css';
import './CSS/reset.css';
import './CSS/style.css';
import './CSS/fonts.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import ForecastComponent from './components/Forecast';
import FavoriteCities from './components/FavoriteCities';
import Statistics from './components/Statistics';

function App() {
  const [currentScreen, setCurrentScreen] = React.useState('dashboard');
  const [cities, setCities] = React.useState(['Київ', 'Львів', 'Одеса']);

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
    <div className="wrapper">
      <div className="container">
        <header className="header">
          <section className="conteiner__header">
            <section className="header__logo">
              <img src="/IMAGES/weather-icon.webp" alt="Weather Vibes Logo" className="header__logo-img" />
              <h1 className="header__logo-title">Weather Vibes</h1>
              <button id="theme-toggle" onClick={() => document.body.classList.toggle('dark-theme')}>
                Перемикнути тему
              </button>
            </section>
          </section>
        </header>
        <nav className="container__nav">
          <input type="text" placeholder="Пошук місця" className="nav__input" id="cityInput" />
          <button className="nav__btn-search" onClick={() => setCurrentScreen('dashboard')}>
            Пошук
          </button>
          <div className="current_place">Київ</div>
          <div className="current_date">Сьогодні, 7 Листопада</div>
          <nav className="header__nav">
            <ul className="header__menu">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('dashboard'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('forecast'); }}>Прогноз</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('cities'); }}>Міста</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('stats'); }}>Статистика</a></li>
            </ul>
          </nav>
        </nav>
        {renderScreen()}
        <p className="footer__info">© Weather Vibes by Cherhinets Yuliia</p>
      </div>
    </div>
  );
}

export default App;
