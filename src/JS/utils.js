// src/JS/utils.js
export function processData(data) {
    // если пришёл один объект с методом getTemperature
    if (data && typeof data.getTemperature === 'function') {
    return data.getTemperature();
    }

    // если пришёл массив данных
    if (Array.isArray(data)) {
    return data.map(d => d.getTemperature());
    }

    throw new Error('Invalid data type passed to processData');
}
