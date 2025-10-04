// Клас WeatherCondition є базовим для різних типів погодних умов.
// Використовується в ієрархії успадкування для моделювання поліморфізму.
export class WeatherCondition {
    // Приватне поле для типу погодних умов (наприклад, "Sunny", "Rainy").
    #type;

    // Конструктор ініціалізує тип погодних умов.
    constructor(type) { this.#type = type; }

    // Getter для отримання типу погодних умов (тривіальний метод).
    getType() { return this.#type; }

    // Нетривіальний метод, який повертає опис умов.
    describe() { return `Condition: ${this.#type}`; }
}