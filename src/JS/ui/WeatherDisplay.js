import { WeatherData } from '../data/WeatherData.js';

// абстрактний клас UIComponent є базою для всіх елементів інтерфейсу для успадкування та динамічного поліморфізму
export class UIComponent {
  #element;
  constructor() {
    if (new.target === UIComponent) throw new Error("Abstract class cannot be instantiated");
    this.#element = document.createElement('div');
  }
  render() { throw new Error("Method 'render' must be implemented"); }
  getElement() { return this.#element; }
}

// клас WeatherDisplay успадковує UIComponent і реалізує Displayable для відображення поточних погодних даних
// демонструє динамічний поліморфізм через перевизначення методу display

export class WeatherDisplay extends UIComponent {
  render(weather) {
    this.getElement().innerHTML = `<p>${weather.getWeatherSummary()}</p>`;
    document.body.appendChild(this.getElement());
  }
  display() {
    // реалізація контракту Displayable
    this.render(new WeatherData(20, 'Sunny')); // приклад із фіктивними даними
  }
}
