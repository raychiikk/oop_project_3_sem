import { UIComponent, Displayable } from './UIComponent.js';

export class ForecastDisplay extends UIComponent {
render(forecast) {
    this.getElement().innerHTML = `<p>Avg: ${forecast.getAverageTemp()}°C</p>`;
    document.body.appendChild(this.getElement());
}

  // Реалізація методу display для поліморфізму.
  display() { this.render(/* дані */); } // Поки заглушка
}