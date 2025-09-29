// Клас Forecast управляє списком погодних даних для прогнозу на кілька днів.
// Використовує інкапсуляцію для зберігання внутрішнього масиву даних.
export class Forecast {
    // Приватне поле для зберігання масиву об'єктів WeatherData.
    #data = [];

    // Нетривіальний метод для додавання нового дня до прогнозу.
    addDay(weather) { this.#data.push(weather); }

    // Нетривіальний метод, який обчислює середню температуру за всіма днями.
    // Демонструє використання reduce для обробки масиву.
    getAverageTemp() { return this.#data.reduce((sum, w) => sum + w.getTemperature(), 0) / this.#data.length || 0; }

    // Нетривіальний метод, який прогнозує тенденцію температури (поки базовий).
    predictTrend() { return this.#data.length > 0 ? 'Rising' : 'Stable'; }
}