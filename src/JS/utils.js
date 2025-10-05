// Файл utils.js містить допоміжні функції для обробки погодних даних.
// Використовується для демонстрації статичного поліморфізму, обробляючи як один об'єкт, так і масив.

export function processData(data) {
    // Функція processData демонструє статичний поліморфізм:
    // - Якщо data є масивом, повертає масив температур.
    // - Якщо data є об'єктом WeatherData, повертає масив із однією температурою.
    if (Array.isArray(data)) {
    return data.map(item => item.getTemperature());
    } else if (typeof data.getTemperature === 'function') {
    return [data.getTemperature()];
    } else {
    throw new Error('Невірний тип даних для обробки');
    }
}