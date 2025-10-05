// Клас ForecastDisplay успадковує UIComponent і відображає середню температуру прогнозу.
// Демонструє динамічний поліморфізм через перевизначення методу render.
import { UIComponent } from './UIComponent.js';
import { Displayable } from './Displayable.js';

export class ForecastDisplay extends UIComponent {
  // Перевизначений метод render, який відображає середню температуру прогнозу.
render(forecast) {
    this.getElement().innerHTML = `<p>Avg: ${forecast.getAverageTemp()}°C</p>`;
    document.body.appendChild(this.getElement());
}
// Реалізація методу display для поліморфізму.
  display() { this.render(/* дані */); } // Поки заглушка
}