// Клас WeatherDisplay успадковує UIComponent і реалізує Displayable для відображення поточних погодних даних.
// Демонструє динамічний поліморфізм через перевизначення методу display.
import { UIComponent } from './UIComponent.js';
import { Displayable } from './Displayable.js';

export class WeatherDisplay extends UIComponent {
  render(weather) {
    this.getElement().innerHTML = `<p>${weather.getWeatherSummary()}</p>`;
    document.body.appendChild(this.getElement());
  }

  // Реалізація методу display для поліморфізму.
  display() {
    this.render(/* дані */); // Поки заглушка, додай логіку пізніше (наприклад, this.render(new WeatherData(20, 'Sunny')))
  }
}