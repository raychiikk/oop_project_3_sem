// клас WeatherCondition є базовим для різних типів погодних умов потрібен в ієрархії успадкування для моделювання поліморфізму
// Базовий клас для різних типів погодних умов
export class WeatherCondition {
    #type; // приватне поле

    constructor(type) { 
        this.#type = type; 
    }

    // getter для отримання типу погодних умов 
    getType() { 
        return this.#type; 
    }

    // нетривіальний метод — обчислює умовну "інтенсивність"
    getIntensity() {
        // У базовому класі — дефолтна поведінка
        return 1; 
    }

    // нетривіальний метод, який повертає опис умов
    describe() { 
        return `Condition: ${this.#type}, intensity: ${this.getIntensity()}`; 
    }
}
