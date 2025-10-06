// клас WeatherCondition є базовим для різних типів погодних умов потрібен в ієрархії успадкування для моделювання поліморфізму
export class WeatherCondition {
    #type;

    constructor(type) { this.#type = type; }

    // getter для отримання типу погодних умов 
    getType() { return this.#type; }

    // нетривіальний метод, який повертає опис умов.
    describe() { return `Condition: ${this.#type}`; }
}