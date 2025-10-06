// клас ForecastDisplay успадковує UIComponent і реалізує Displayable для відображення прогнозу, динамічний поліморфізм через перевизначення методу display
import { UIComponent } from './UIComponent.js';
import { Forecast } from './Forecast.js';
import { Displayable } from './Displayable.js';

export class ForecastDisplay extends UIComponent {
  render(forecast) {
    this.getElement().innerHTML = `<p>Avg: ${forecast.getAverageTemp().toFixed(1)}°C</p>`;
    document.body.appendChild(this.getElement());
  }
  display() {
    // реалізація контракту Displayable
    const testForecast = new Forecast();
    testForecast.addDay({ getTemperature: () => 18 });
    testForecast.addDay({ getTemperature: () => 22 });
    this.render(testForecast); // приклад із фіктивними даними
  }
}
