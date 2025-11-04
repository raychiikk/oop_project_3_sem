import { WeatherCondition } from "./WeatherCondition.js";

export class SunnyCondition extends WeatherCondition {
    #sunHours;

    constructor(sunHours = 10) {
        super("Sunny");
        this.#sunHours = sunHours;
    }

    // нетривіальний метод — обчислення інтенсивності за годинами сонця
    getIntensity() {
        return Math.min(10, this.#sunHours / 2);
    }

    // перевизначення опису
    describe() {
        
        return `Sunny: ${this.#sunHours} hours of sun, intensity = ${this.getIntensity()}`;
    }

    increaseSun(hours) {
        this.#sunHours += hours;
    }
}

