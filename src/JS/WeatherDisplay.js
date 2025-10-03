// Клас WeatherDisplay успадковує UIComponent і відображає поточні погодні дані.
// Демонструє динамічний поліморфізм через перевизначення методу render.
import { UIComponent } from './UIComponent.js';

export class WeatherDisplay extends UIComponent {
  // Перевизначений метод render, який відображає дані про погоду в DOM.
  // Використовує поліморфізм, оскільки працює з будь-яким об'єктом WeatherData.
render(weather) {
    this.getElement().innerHTML = `<p>${weather.getWeatherSummary()}</p>`;
    document.body.appendChild(this.getElement());
}
}