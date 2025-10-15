// src/js/data/CityManager.js
export class CityManager {
    #cities = [];

    addCity(city) {
        this.#cities.push(city);
    }

    removeCity(city) {
        this.#cities = this.#cities.filter(c => c !== city);
    }

    getCities() {
        return this.#cities;
    }
}
