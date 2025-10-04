// Клас RainyCondition успадковує WeatherCondition і додає інтенсивність дощу.
// Демонструє успадкування та перевизначення методу describe.
import { WeatherCondition } from './WeatherCondition.js';

export class RainyCondition extends WeatherCondition {
  // Приватне поле для інтенсивності дощу.
#intensity;

  // Конструктор ініціалізує тип і інтенсивність, викликаючи батьківський конструктор.
constructor(intensity) {
    super('Rainy');
    this.#intensity = intensity;
}

  // Перевизначений метод describe, який додає інтенсивність до базового опису.
describe() { return `${super.describe()}, Intensity: ${this.#intensity}`; }
}