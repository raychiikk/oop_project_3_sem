// клас Forecast управляє списком погодних даних для прогнозу на кілька днів, інкапсцуляція
export class Forecast {
  constructor(days) {
      this.days = days;
  }

  averageIntensity() {
      const sum = this.days.reduce((acc, day) => acc + day.getIntensity(), 0);
      return (sum / this.days.length).toFixed(2);
  }

  printForecast() {
      console.log("📆 Forecast:");
      this.days.forEach((day, i) => console.log(`Day ${i + 1}: ${day.describe()}`));
      console.log(`Average intensity: ${this.averageIntensity()}`);
  }
}
  