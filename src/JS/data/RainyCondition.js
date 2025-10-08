// клас RainyCondition успадковує WeatherCondition і додає інтенсивність дощу, демонструє успадкування та перевизначення методу describe
import { WeatherCondition } from "./WeatherCondition.js";

export class RainyCondition extends WeatherCondition {
    #rainAmount; // мм опадів

    constructor(rainAmount = 5) {
        super("Rainy");
        this.#rainAmount = rainAmount;
    }

    // нетривіальний метод — інтенсивність дощу за кількістю опадів
    getIntensity() {
        return Math.min(10, this.#rainAmount / 2);
    }

    describe() {
        return `🌧️ Rainy: ${this.#rainAmount}mm of rain, intensity = ${this.getIntensity()}`;
    }

    addRain(mm) {
        this.#rainAmount += mm;
    }
}
