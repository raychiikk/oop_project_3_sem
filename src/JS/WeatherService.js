import { City } from './data/City.js';
import { CityManager } from './data/CityManager.js';
import { WeatherData } from './data/WeatherData.js';
import { Forecast } from './logic/Forecast.js';
import { WeatherFactory } from './logic/WeatherFactory.js';

/**
 * Головний сервіс погоди (Facade).
 * Відповідає за координацію роботи між даними (CityManager), 
 * логікою створення (WeatherFactory) та представленням.
 * * @class
 */
export class WeatherService {
  #cityManager;
  #currentWeather;
  #forecast;

  /**
   * Ініціалізує сервіс, налаштовує менеджер міст та початкові дані.
   */
  constructor() {
    this.#cityManager = new CityManager();
    
    // Додаємо початкові дані
    if (this.#cityManager.getCities().length === 0) {
        this.#cityManager.addCity(new City("Київ", "Україна"));
        this.#cityManager.addCity(new City("Львів", "Україна"));
        this.#cityManager.addCity(new City("Одеса", "Україна"));
    }

    // Початкова ініціалізація погоди
    this.#currentWeather = new WeatherData(22, WeatherFactory.createCondition('sunny', 8));

    // Генерація прогнозу
    const forecastDays = [
      WeatherFactory.createCondition('sunny', 10),
      WeatherFactory.createCondition('rainy', 5),
      WeatherFactory.createCondition('sunny', 8),
      WeatherFactory.createCondition('rainy', 12),
    ];
    this.#forecast = new Forecast(forecastDays);
  }

  /**
   * Отримує список улюблених міст через CityManager.
   * @returns {Array<City>} Масив об'єктів City.
   */
  getFavoriteCities() {
    return this.#cityManager.getCities();
  }

  /**
   * Додає нове місто.
   * @param {string} cityName - Назва міста.
   * @param {string} [cityCountry="Невідомо"] - Назва країни.
   */
  addCity(cityName, cityCountry = "Невідомо") {
    const newCity = new City(cityName, cityCountry);
    this.#cityManager.addCity(newCity);
  }

  /**
   * Видаляє місто за назвою.
   * @param {string} cityName - Назва міста для видалення.
   */
  removeCity(cityName) {
    const cities = this.getFavoriteCities();
    const cityToRemove = cities.find(city => city.getName() === cityName);
    if (cityToRemove) {
      this.#cityManager.removeCity(cityToRemove);
    }
  }
  
  /**
   * Повертає поточні дані погоди.
   * @returns {WeatherData} Об'єкт з даними про погоду.
   */
  getCurrentWeather() {
    return this.#currentWeather;
  }

  /**
   * Оновлює погоду випадковими даними.
   * Використовує WeatherFactory для створення нової умови.
   * * @returns {WeatherData} Оновлений об'єкт погоди.
   */
  updateWeather() {
    const temp = Math.floor(Math.random() * 30);
    const condition = WeatherFactory.createRandomCondition();
    
    this.#currentWeather = new WeatherData(temp, condition);
    return this.#currentWeather;
  }

  /**
   * Розраховує статистику на основі прогнозу.
   * * @returns {Object} Об'єкт зі статистичними даними (середня інтенсивність, кількість днів).
   */
  getStatistics() {
    const avgIntensity = this.#forecast.averageIntensity();
    
    // Підрахунок кількості сонячних та дощових днів
    const conditionCounts = this.#forecast.days.reduce((acc, day) => {
        const type = day.getType(); 
        const typeName = (type === 'Sunny') ? 'Сонячно' : 'Дощ';
        if (!acc[typeName]) acc[typeName] = 0;
        acc[typeName]++;
        return acc;
    }, {}); 

    const conditionData = Object.keys(conditionCounts).map(key => ({
        name: key, 
        value: conditionCounts[key]
    }));

    return {
      averageIntensity: avgIntensity,
      totalDays: this.#forecast.days.length,
      conditionData: conditionData 
    };
  }
}

