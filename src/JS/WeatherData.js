// клас WeatherData представляє дані про поточну погоду, інкапсуляція
export class WeatherData {
    #temperature;
    #description;

    constructor(temp, desc) {
    this.#temperature = temp;
    this.#description = desc;
    }

    getTemperature() { return this.#temperature; }

    setTemperature(temp) { this.#temperature = temp; }

    // нетривіальний метод, який повертає зведену інформацію про погоду у форматі рядка
    getWeatherSummary() { return `${this.#temperature}°C, ${this.#description}`; }
    
    // нетривіальний метод, який перевіряє, чи температура є екстремальною (> 30°C) для аналізу погодних умов
    checkExtreme() { return this.#temperature > 30; }
}