// src/JS/WeatherService.js
import { City } from './data/City.js';
import { CityManager } from './data/CityManager.js';
import { RainyCondition } from './data/RainyCondition.js';
import { SunnyCondition } from './data/SunnyCondition.js';
import { WeatherData } from './data/WeatherData.js';
import { Forecast } from './logic/Forecast.js';

/**
 * WeatherService - це єдина точка входу для GUI (React).
 * Він інкапсулює ВСЮ бізнес-логіку (керування містами,
 * отримання погоди, розрахунок статистики)
 * і ховає її від компонентів.
 */
export class WeatherService {
  #cityManager;
  #currentWeather;
  #forecast;

  constructor() {
    // 1. Ініціалізуємо CityManager
    this.#cityManager = new CityManager();
    
    // Наповнюємо його реальними об'єктами City, а не рядками
    this.#cityManager.addCity(new City("Київ", "Україна"));
    this.#cityManager.addCity(new City("Львів", "Україна"));
    this.#cityManager.addCity(new City("Одеса", "Україна"));

    // 2. Ініціалізуємо поточну погоду
    this.#currentWeather = new WeatherData(22, new SunnyCondition(8));

    // 3. Ініціалізуємо дані для статистики (прогноз)
    const forecastDays = [
      new SunnyCondition(10),
      new RainyCondition(5),
      new SunnyCondition(8),
      new RainyCondition(12),
    ];
    this.#forecast = new Forecast(forecastDays);
  }

  // --- Методи для Міст (для FavoriteCities.jsx) ---
  getFavoriteCities() {
    return this.#cityManager.getCities();
  }

  addCity(cityName, cityCountry = "Невідомо") {
    const newCity = new City(cityName, cityCountry);
    this.#cityManager.addCity(newCity);
  }

  removeCity(cityName) {
    const cities = this.getFavoriteCities();
    const cityToRemove = cities.find(city => city.getName() === cityName);
    if (cityToRemove) {
      this.#cityManager.removeCity(cityToRemove);
    }
  }

  // --- Методи для Погоди (для Dashboard.jsx) ---
  getCurrentWeather() {
    return this.#currentWeather;
  }

  updateWeather() {
    const temp = Math.floor(Math.random() * 30);
    const condition = Math.random() > 0.5 
      ? new SunnyCondition(Math.floor(Math.random() * 12)) 
      : new RainyCondition(Math.floor(Math.random() * 15));
    
    this.#currentWeather = new WeatherData(temp, condition);
    return this.#currentWeather;
  }

  // --- Методи для Статистики (для Statistics.jsx) ---
  getStatistics() {
    const avgIntensity = this.#forecast.averageIntensity();

    // Рахуємо типи днів ===
    const conditionCounts = this.#forecast.days.reduce((acc, day) => {
        // day.getType() прийде з базового класу WeatherCondition
        const type = day.getType(); // Буде "Sunny" або "Rainy"
        
        // Перекладаємо для діаграми
        const typeName = (type === 'Sunny') ? 'Сонячно' : 'Дощ';
        
        if (!acc[typeName]) {
            acc[typeName] = 0;
        }
        acc[typeName]++;
        return acc;
    }, {}); // Результат буде: { 'Сонячно': 2, 'Дощ': 2 }

    // Конвертуємо у масив, який "розуміє" Recharts:
    // [ { name: 'Сонячно', value: 2 }, { name: 'Дощ', value: 2 } ]
    const conditionData = Object.keys(conditionCounts).map(key => ({
        name: key, // 'Сонячно'
        value: conditionCounts[key] // 2
    }));

    return {
      averageIntensity: avgIntensity,
      totalDays: this.#forecast.days.length,
      conditionData: conditionData // Додаємо нові дані
    };
  }
}

