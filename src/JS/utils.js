// src/JS/utils.js
export function processData(data) {
    // якщо прийшов один об'єкт із методом getTemperature
    if (data && typeof data.getTemperature === 'function') {
    return data.getTemperature();
    }

    // якщо прийшов масив даних
    if (Array.isArray(data)) {
    return data.map(d => d.getTemperature());
    }

    throw new Error('Invalid data type passed to processData');
}
