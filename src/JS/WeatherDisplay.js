import { UIComponent, Displayable } from './UIComponent.js';

export class WeatherDisplay extends UIComponent {
  render(weather) {
    this.getElement().innerHTML = `<p>${weather.getWeatherSummary()}</p>`;
    document.body.appendChild(this.getElement());
  }

  // Реалізація методу display для поліморфізму.
  display() { this.render(/* дані */); } // Поки заглушка, додай логіку пізніше
}
// Клас WeatherDisplay успадковує UIComponent і реалізує інтерфейс Displayable.