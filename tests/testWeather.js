import { City } from "../src/js/data/City.js";
import { WeatherData } from "../src/js/data/WeatherData.js";
import { WeatherCondition } from "../src/js/data/WeatherCondition.js";
import { SunnyCondition } from "../src/js/data/SunnyCondition.js";
import { RainyCondition } from "../src/js/data/RainyCondition.js";
import { WeatherProcessor } from "../src/js/logic/WeatherProcessor.js";
import { describe, test, expect } from 'vitest';

describe('Weather Classes and Features', () => {
test('WeatherCondition should initialize with type', () => {
    const condition = new WeatherCondition("Default");
    expect(condition.getType()).toBe("Default");
    expect(condition.describe()).toBe("Condition: Default, intensity: 1");
});

test('City should encapsulate name and country with getters', () => {
    const city = new City("Kyiv", "UA");
    expect(city.getName()).toBe("Kyiv");
    expect(city.name).toBeUndefined();
});

test('WeatherData should handle temperature and summary (normal case)', () => {
    const condition = new SunnyCondition(10);
    const data = new WeatherData(25, condition);
    expect(data.getTemperature()).toBe(25);
    expect(data.getWeatherSummary()).toBe("25°C, ☀️ Sunny: 10 hours of sun, intensity = 5");
    expect(data.checkExtreme()).toBe(false); // Нерекстремальна температура
});

test('WeatherData should handle extreme temperature', () => {
    const condition = new SunnyCondition(10);
    const data = new WeatherData(35, condition);
    expect(data.getTemperature()).toBe(35);
    expect(data.getWeatherSummary()).toBe("35°C, ☀️ Sunny: 10 hours of sun, intensity = 5");
    expect(data.checkExtreme()).toBe(true); // Екстремальна температура
});

test('WeatherCondition inheritance should work', () => {
    const sunny = new SunnyCondition(8);
    const rainy = new RainyCondition(12);
    expect(sunny.getType()).toBe("Sunny");
    expect(rainy.getType()).toBe("Rainy");
    expect(sunny.describe()).toContain("Sunny: 8 hours");
    expect(rainy.describe()).toContain("Rainy: 12mm");
});

test('Polymorphism with WeatherCondition', () => {
    const conditions = [new SunnyCondition(10), new RainyCondition(5)];
    conditions.forEach(cond => {
    expect(typeof cond.describe).toBe("function");
    expect(cond.describe()).toContain(cond.getType());
    });
});

test('WeatherProcessor should process WeatherData statically', () => {
    const data = new WeatherData(20, new SunnyCondition(10));
    const processed = WeatherProcessor.process(data);
    expect(processed).toBe(`Processed: 20°C, ${new SunnyCondition(10).describe()}`);
    const arrayResult = WeatherProcessor.processArray([data]);
    expect(arrayResult).toBe(`Processed: 20°C, ${new SunnyCondition(10).describe()}`);
});
});