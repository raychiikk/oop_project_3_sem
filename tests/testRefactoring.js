import { describe, test, expect } from 'vitest';
import { WeatherFactory } from '../src/JS/logic/WeatherFactory.js';
import { CityManager } from '../src/JS/data/CityManager.js';
import { City } from '../src/JS/data/City.js';

describe('Refactoring Patterns Verification', () => {

    // 1. Тестування Factory Method
    test('Factory should create correct weather condition based on type', () => {
        // Перевірка створення сонячної погоди
        const sunny = WeatherFactory.createCondition('sunny', 10);
        expect(sunny.getType()).toBe('Sunny');
        expect(sunny.getIntensity()).toBe(5); // 10 / 2 = 5

        // Перевірка створення дощової погоди
        const rainy = WeatherFactory.createCondition('rainy', 20);
        expect(rainy.getType()).toBe('Rainy');
        expect(rainy.getIntensity()).toBe(10); // 20 / 2 = 10
    });

    test('Factory should throw error for unknown type', () => {
        expect(() => WeatherFactory.createCondition('snowy', 10)).toThrow();
    });

    // 2. Тестування Singleton
    test('CityManager should implement Singleton pattern', () => {
        const manager1 = new CityManager();
        manager1.addCity(new City("UniqueCity", "Test"));

        const manager2 = new CityManager(); // Спроба створити "новий" об'єкт
        
        // Перевіряємо, що manager2 бачить зміни, зроблені в manager1
        const cities = manager2.getCities();
        expect(cities.some(c => c.getName() === "UniqueCity")).toBe(true);
        
        // Перевіряємо референціальну рівність (це один і той самий об'єкт у пам'яті)
        expect(manager1).toBe(manager2);
    });
});