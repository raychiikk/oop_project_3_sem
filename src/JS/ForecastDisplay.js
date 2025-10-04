// Клас ForecastDisplay успадковує UIComponent і відображає середню температуру прогнозу.
// Демонструє динамічний поліморфізм через перевизначення методу render.
import { UIComponent } from './UIComponent.js';

export class ForecastDisplay extends UIComponent {
  // Перевизначений метод render, який відображає середню температуру прогнозу.
render(forecast) {
    this.getElement().innerHTML = `<p>Avg: ${forecast.getAverageTemp()}°C</p>`;
    document.body.appendChild(this.getElement());
}
}