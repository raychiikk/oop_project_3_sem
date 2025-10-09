import { City } from "./js/data/City.js";
import { WeatherData } from "./js/data/WeatherData.js";
import { SunnyCondition } from "./js/data/SunnyCondition.js";
import { RainyCondition } from "./js/data/RainyCondition.js";
import { Forecast } from "./js/logic/Forecast.js";
import { WeatherProcessor } from "./js/logic/WeatherProcessor.js";

const city = new City("Kyiv");

const sunny = new SunnyCondition(8);
const rainy = new RainyCondition(12);
sunny.increaseSun(4);
rainy.addRain(3);

const today = new WeatherData(20, sunny);
const tomorrow = new WeatherData(16, rainy);

console.log("Weather Today:", today.getWeatherSummary());
console.log("Weather Tomorrow:", tomorrow.getWeatherSummary());

const conditions = [sunny, rainy];
console.log("\nPolymorphism Demo:");
conditions.forEach(cond => console.log(cond.describe()));

const forecast = new Forecast([sunny, rainy, new SunnyCondition(10)]);
forecast.printForecast();

console.log("\nProcessed Data:", WeatherProcessor.process(today));