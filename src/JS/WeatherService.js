import { City } from './data/City.js';
import { CityManager } from './data/CityManager.js';
import { WeatherData } from './data/WeatherData.js';
import { Forecast } from './logic/Forecast.js';
import { WeatherFactory } from './logic/WeatherFactory.js'; 

export class WeatherService {
  #cityManager;
  #currentWeather;
  #forecast;

  constructor() {
    // Використання Singleton: навіть при new CityManager(), отримаємо той самий об'єкт
    this.#cityManager = new CityManager();
    
    // Додаємо початкові дані (якщо вони ще не були додані)
    if (this.#cityManager.getCities().length === 0) {
        this.#cityManager.addCity(new City("Київ", "Україна"));
        this.#cityManager.addCity(new City("Львів", "Україна"));
        this.#cityManager.addCity(new City("Одеса", "Україна"));
    }

    // Використання Factory для ініціалізації
    this.#currentWeather = new WeatherData(22, WeatherFactory.createCondition('sunny', 8));

    const forecastDays = [
      WeatherFactory.createCondition('sunny', 10),
      WeatherFactory.createCondition('rainy', 5),
      WeatherFactory.createCondition('sunny', 8),
      WeatherFactory.createCondition('rainy', 12),
    ];
    this.#forecast = new Forecast(forecastDays);
  }

  // ... (методи getFavoriteCities, addCity, removeCity залишаються без змін) ...

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
  
  getCurrentWeather() {
    return this.#currentWeather;
  }

  // Оновлений метод з використанням Factory
  updateWeather() {
    const temp = Math.floor(Math.random() * 30);
    
    // REFACTORING: Делегуємо створення умови фабриці
    const condition = WeatherFactory.createRandomCondition();
    
    this.#currentWeather = new WeatherData(temp, condition);
    return this.#currentWeather;
  }

  getStatistics() {
    // ... (код методу без змін, він вже був добре написаний) ...
    const avgIntensity = this.#forecast.averageIntensity();
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

