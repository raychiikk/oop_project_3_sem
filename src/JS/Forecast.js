// клас Forecast управляє списком погодних даних для прогнозу на кілька днів, інкапсцуляція
export class Forecast {
  #data = []; // масив об'єктів WeatherData

  // нетривіальний метод для додавання нового дня до прогнозу.
  addDay(weather) { this.#data.push(weather); }

  // нетривіальний метод, який обчислює середню температуру за всіма днями, використано reduce для обробки масиву
  getAverageTemp() { return this.#data.reduce((sum, w) => sum + w.getTemperature(), 0) / this.#data.length || 0; }

  // нетривіальний метод, який прогнозує тенденцію температури 
  predictTrend() { return this.#data.length > 0 ? 'Rising' : 'Stable'; }

  // публічний метод для отримання доступу до приватного масиву даних 
  getData() { return this.#data; }
}