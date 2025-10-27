// src/js/data/CityManager.js
export class CityManager {
    #cities = [];

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
