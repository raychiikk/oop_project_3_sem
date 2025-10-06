import { WeatherData } from './WeatherData.js';
// Абстрактний клас UIComponent є базою для всіх елементів інтерфейсу.
// Використовується для успадкування та динамічного поліморфізму.
export class UIComponent {
  #element;
  constructor() {
    if (new.target === UIComponent) throw new Error("Abstract class cannot be instantiated");
    this.#element = document.createElement('div');
  }
  render() { throw new Error("Method 'render' must be implemented"); }
  getElement() { return this.#element; }
}

// Клас WeatherDisplay успадковує UIComponent і реалізує Displayable для відображення поточних погодних даних.
// Демонструє динамічний поліморфізм через перевизначення методу display.
import { Displayable } from './Displayable.js';

export class WeatherDisplay extends UIComponent {
  render(weather) {
    this.getElement().innerHTML = `<p>${weather.getWeatherSummary()}</p>`;
    document.body.appendChild(this.getElement());
  }
  display() {
    this.render(new WeatherData(20, 'Sunny')); // Приклад із фіктивними даними
  }
}