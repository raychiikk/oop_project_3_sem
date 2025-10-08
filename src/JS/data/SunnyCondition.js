import { WeatherCondition } from "./WeatherCondition.js";

export class SunnyCondition extends WeatherCondition {
constructor() {
    super("Sunny");
}
describe() {
    return `It's sunny. Wear sunglasses!`;
}
}
