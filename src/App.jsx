import './App.css'
import './CSS/reset.css'
import './CSS/style.css'
import './CSS/fonts.css'
import { runClassTests, demonstrateClasses } from './main.js'
import React from 'react'

function App() {

  // тестування класів

  React.useEffect(() => {
    runClassTests();
    demonstrateClasses();
  }, []);

  const handleManualTest = () => {
    console.clear();
    runClassTests();
  };

  const handleClassDemo = () => {
    console.clear();
    demonstrateClasses();
  };


  return (

    // <!-- HEADER -->

    <div className="wrapper">
      <div className="container">
        <header className="header">
          <section className="conteiner__header">
            <section className="header__logo">
              <img src="/IMAGES/weather-icon.webp" alt="Weather Vibes Logo" className="header__logo-img" />
              <h1 className="header__logo-title">Weather Vibes</h1>
              <a href="#home">Home</a>
              <button id="theme-toggle">Перемикнути тему</button>
            </section>
          </section>
        </header>

        {/* <!-- NAV --> */}

        <nav className="container__nav">
          <input type="text" placeholder="Пошук місця" className="nav__input" required />
          <button className="nav__btn-search">Пошук</button>
          <div className="current_place">Київ</div>
          <div className="current_date">Сьогодні, 7 Листопада</div>
          <nav className="header__nav">
            <ul className="header__menu">
              <li><a href="#yesterday">Вчора</a></li>
              <li><a href="#now">Зараз</a></li>
              <li><a href="#hours">По годинах</a></li>
              <li><a href="#today">Сьогодні</a></li>
              <li><a href="#tomorrow">Завтра</a></li>
              <li><a href="#3_days">3 дні</a></li>
            </ul>
          </nav>
        </nav>

        {/* <!-- TEXT --> */}

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '20px' }}>
          <button onClick={handleManualTest} style={{ padding: '10px 15px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}>
            Тест класів
          </button>
          <button onClick={handleClassDemo} style={{ padding: '10px 15px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px' }}>
            Демо класів
          </button>
        </div>

        <div className="container__text">
          <h2 className="text__title">Погода у Києві на місяць</h2>
        </div>

        {/* <!-- MAIN --> */}
  
  
        {/* <!-- FOOTER --> */}

        <p className="footer__info">© Weather Vibes by Cherhinets Yuliia</p>
        <script type="module" src="src/main.js"></script>
      </div>
    </div>
  )
}

export default App
