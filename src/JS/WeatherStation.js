// Клас WeatherStation моделює метеостанцію, яка збирає та обробляє погодні дані.
// Використовує інкапсуляцію для зберігання ідентифікатора та даних.
// Може бути базовим класом для спеціалізованих станцій (успадкування).
export class WeatherStation {
    // Приватне поле для унікального ідентифікатора метеостанції.
    #stationId;
    // Приватне поле для поточних погодних даних.
    #currentData;

    // Конструктор ініціалізує ідентифікатор і порожні дані.
    constructor(stationId) {
    this.#stationId = stationId;
    this.#currentData = null;
    }

    // Getter для отримання ідентифікатора станції (тривіальний метод).
    getStationId() { return this.#stationId; }

    // Нетривіальний метод для оновлення погодних даних із зовнішнього джерела.
    updateData(weather) {
    this.#currentData = weather;
    return `Station ${this.#stationId} updated with ${weather.getWeatherSummary()}`;
    }

    // Нетривіальний метод для генерації звіту на основі даних станції.
    generateReport() {
    return this.#currentData ? `Report from ${this.#stationId}: ${this.#currentData.getWeatherSummary()}` : 'No data available';
    }
}