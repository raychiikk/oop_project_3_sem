import { SunnyCondition } from "../data/SunnyCondition.js";
import { RainyCondition } from "../data/RainyCondition.js";

/**
 * Клас-фабрика для створення об'єктів погодних умов.
 * Реалізує патерн Factory Method (Static Variant).
 */
export class WeatherFactory {
    
    // Створює конкретну умову на основі типу
    static createCondition(type, intensity) {
        switch (type.toLowerCase()) {
            case 'sunny':
                return new SunnyCondition(intensity);
            case 'rainy':
                return new RainyCondition(intensity);
            default:
                throw new Error(`Unknown weather type: ${type}`);
        }
    }

    // Створює випадкову погодну умову (бізнес-логіка генерації)
    static createRandomCondition() {
        const isSunny = Math.random() > 0.5;
        if (isSunny) {
            // Генеруємо сонячні години (0-12)
            const hours = Math.floor(Math.random() * 12);
            return this.createCondition('sunny', hours);
        } else {
            // Генеруємо опади (0-15 мм)
            const mm = Math.floor(Math.random() * 15);
            return this.createCondition('rainy', mm);
        }
    }
}