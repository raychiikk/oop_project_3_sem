// Клас ForecastDisplay успадковує UIComponent і реалізує Displayable для відображення прогнозу.
// Демонструє динамічний поліморфізм через перевизначення методу display.
import { UIComponent } from './UIComponent.js';
import { Forecast } from './Forecast.js';
import { Displayable } from './Displayable.js';

export class ForecastDisplay extends UIComponent {
  render(forecast) {
    this.getElement().innerHTML = `<p>Avg: ${forecast.getAverageTemp()}°C</p>`;
    document.body.appendChild(this.getElement());
  }
  display() {
    this.render(new Forecast()); // Приклад із фіктивними даними
  }
}