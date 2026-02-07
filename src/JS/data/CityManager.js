export class CityManager {
    static #instance = null; // Статичне поле для зберігання єдиного екземпляра
    #cities = [];

    constructor() {
        // Логіка Singleton: якщо екземпляр вже є, повертаємо його
        if (CityManager.#instance) {
            return CityManager.#instance;
        }
        CityManager.#instance = this;
    }

    addCity(city) {
        if (city.getName().trim() !== '' && !this.#cities.some(c => c.getName() === city.getName())) {
            this.#cities.push(city);
        }
    }

    removeCity(cityToRemove) {
        this.#cities = this.#cities.filter(city => city.getName() !== cityToRemove.getName());
    }

    getCities() {
        return [...this.#cities];
    }
}
