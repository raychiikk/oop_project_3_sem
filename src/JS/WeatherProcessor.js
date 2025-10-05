// Клас WeatherProcessor містить статичні методи для обробки погодних даних.
// Використовується для демонстрації статичного поліморфізму через різні методи обробки.

export class WeatherProcessor {
    // Статичний метод process обробляє один об'єкт WeatherData, повертаючи його зведений опис.
    static process(weather) {
    if (typeof weather.getWeatherSummary !== 'function') {
        throw new Error('Очікується об’єкт із методом getWeatherSummary');
    }
    return `Processed: ${weather.getWeatherSummary()}`;
    }

    // Статичний метод processArray обробляє масив об’єктів WeatherData, повертаючи зведені описи.
    static processArray(weatherArray) {
    if (!Array.isArray(weatherArray) || weatherArray.length === 0) {
        throw new Error('Очікується непустий масив об’єктів WeatherData');
    }
    return weatherArray.map(weather => {
        if (typeof weather.getWeatherSummary !== 'function') {
        throw new Error('Елемент масиву має бути об’єктом із методом getWeatherSummary');
        }
        return `Processed: ${weather.getWeatherSummary()}`;
    }).join(', ');
    }
}