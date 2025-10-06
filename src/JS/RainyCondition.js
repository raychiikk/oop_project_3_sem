// клас RainyCondition успадковує WeatherCondition і додає інтенсивність дощу, демонструє успадкування та перевизначення методу describe
import { WeatherCondition } from './WeatherCondition.js';

export class RainyCondition extends WeatherCondition {
#intensity;

  // конструктор ініціалізує тип і інтенсивність, викликаючи батьківський конструктор
constructor(intensity) {
    super('Rainy');
    this.#intensity = intensity;
}
  // перевизначений метод describe, який додає інтенсивність до базового опису
describe() { return `${super.describe()}, Intensity: ${this.#intensity}`; }
}