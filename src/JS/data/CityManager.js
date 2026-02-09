/**
 * Менеджер для управління списком улюблених міст.
 * Реалізує патерн Singleton, гарантуючи існування єдиного списку міст 
 * для всього застосунку.
 * @class
 */
export class CityManager {
    /** * Статичне поле для зберігання єдиного екземпляра.
     * @type {CityManager} 
     */
    static #instance = null;
    
    /** * Приватний масив об'єктів міст.
     * @type {Array<Object>} 
     */
    #cities = [];

    /**
     * Створює екземпляр CityManager або повертає існуючий.
     * @constructor
     */
    constructor() {
        if (CityManager.#instance) {
            return CityManager.#instance;
        }
        CityManager.#instance = this;
    }

    /**
     * Додає нове місто до списку, якщо його там ще немає.
     * @param {Object} city - Об'єкт класу City.
     * @returns {void}
     */
    addCity(city) {
        if (city.getName().trim() !== '' && !this.#cities.some(c => c.getName() === city.getName())) {
            this.#cities.push(city);
        }
    }

    /**
     * Видаляє місто зі списку за об'єктом.
     * @param {Object} cityToRemove - Об'єкт міста, який треба видалити.
     * @returns {void}
     */
    removeCity(cityToRemove) {
        this.#cities = this.#cities.filter(city => city.getName() !== cityToRemove.getName());
    }

    /**
     * Повертає копію списку міст.
     * @returns {Array<Object>} Масив міст.
     */
    getCities() {
        return [...this.#cities];
    }
}
