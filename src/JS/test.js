// unit tests for City, WeatherData, Forecast, UIComponent, WeatherDisplay, ForecastDisplay, WeatherCondition, RainyCondition, Displayable classes
import { WeatherData } from './WeatherData.js';
import { Forecast } from './Forecast.js';
import { City } from './City.js';
import { ForecastDisplay } from './ForecastDisplay.js';
import { WeatherCondition } from './WeatherCondition.js';
import { RainyCondition } from './RainyCondition.js';
import { Displayable } from './Displayable.js';
import { WeatherProcessor } from './WeatherProcessor.js';
import { UIComponent } from './UIComponent.js';
import { WeatherDisplay } from './WeatherDisplay.js';
import { processData } from './utils.js';




export function runClassTests() {
  console.log('ТЕСТУВАННЯ КЛАСІВ ООП');
  console.log('=====================');

  // 1. Тестуємо WeatherData
  console.log('1. ТЕСТ WeatherData:');
  const currentWeather = new WeatherData(15, 'Хмарно');
  console.log('Температура:', currentWeather.getTemperature() + '°C');
  console.log('Погодний опис:', currentWeather.getWeatherSummary());
  console.log('Екстремальна температура?', currentWeather.checkExtreme());
  currentWeather.setTemperature(35);
  console.log('Оновлена температура:', currentWeather.getTemperature() + '°C');
  console.log('Тепер екстремальна?', currentWeather.checkExtreme());

  // 2. Тестуємо City
  console.log('2. ТЕСТ City:');
  const kyiv = new City('Київ', 'Україна');
  console.log('Назва міста:', kyiv.getName());
  console.log('Деталі локації:', kyiv.getLocationDetails());
  console.log('Сусідні міста:', kyiv.findNearby());

  // 3. Тестуємо Forecast
  console.log('3. ТЕСТ Forecast:');
  const forecast = new Forecast();
  forecast.addDay(new WeatherData(18, 'Сонячно'));
  forecast.addDay(new WeatherData(16, 'Легка хмарність'));
  forecast.addDay(new WeatherData(14, 'Дощ'));
  forecast.addDay(new WeatherData(20, 'Ясно'));
  console.log('Середня температура:', forecast.getAverageTemp().toFixed(1) + '°C');
  console.log('Тенденція:', forecast.predictTrend());

  // 4. Тестуємо UIComponent, WeatherDisplay, ForecastDisplay (динамічний поліморфізм)
  console.log('4. ТЕСТ UIComponent та спадкоємці:');
  try {
    new UIComponent();
  } catch (e) {
    console.log('UIComponent тест: Абстрактний клас працює -', e.message);
  }
  const weatherDisplay = new WeatherDisplay();
  const forecastDisplay = new ForecastDisplay();
  weatherDisplay.render(currentWeather);
  forecastDisplay.render(forecast);

  // 5. Тестуємо WeatherCondition та RainyCondition
  console.log('5. ТЕСТ WeatherCondition та RainyCondition:');
  const condition = new WeatherCondition('Sunny');
  console.log('Базова умова:', condition.describe());
  const rainy = new RainyCondition('Heavy');
  console.log('Дощова умова:', rainy.describe());

  // 6. Тестуємо Displayable (динамічний поліморфізм)
  console.log('6. ТЕСТ Displayable:');
  const displayables = [weatherDisplay, forecastDisplay];
  displayables.forEach(d => d.display());

  // 7. Тестуємо статичний поліморфізм (processData)
  console.log('7. ТЕСТ Статичного поліморфізму (processData):');
  console.log('Температура одного дня:', processData(currentWeather));
  console.log('Температури прогнозу:', processData(forecast.getData()));

  // 8. Тестуємо статичний поліморфізм (WeatherProcessor)
  console.log('8. ТЕСТ Статичного поліморфізму (WeatherProcessor):');
  console.log('Обробка одного дня:', WeatherProcessor.process(currentWeather));
  console.log('Обробка масиву:', WeatherProcessor.processArray(forecast.getData().map((_, i) => new WeatherData(15 + i, 'Test'))));

  console.log('ТЕСТУВАННЯ ЗАВЕРШЕНО');
}

export function demonstrateClasses() {
  console.log('ДЕМОНСТРАЦІЯ РОБОТИ КЛАСІВ:');

  const kyiv = new City('Київ', 'Україна');
  const todayWeather = new WeatherData(22, 'Ясно');
  const weeklyForecast = new Forecast();

  const days = [
    { temp: 22, desc: 'Ясно' },
    { temp: 20, desc: 'Хмарно' },
    { temp: 18, desc: 'Дощ' },
    { temp: 19, desc: 'Легка хмарність' },
    { temp: 23, desc: 'Сонячно' }
  ];

  days.forEach(day => {
    weeklyForecast.addDay(new WeatherData(day.temp, day.desc));
  });

  const weatherDisplay = new WeatherDisplay();
  const forecastDisplay = new ForecastDisplay();

  weatherDisplay.render(todayWeather);
  forecastDisplay.render(weeklyForecast);

  console.log('Місто:', kyiv.getLocationDetails());
  console.log('Сьогодні:', todayWeather.getWeatherSummary());
  console.log('Прогноз на тиждень:');
  console.log('- Середня температура:', weeklyForecast.getAverageTemp().toFixed(1) + '°C');
  console.log('- Тенденція:', weeklyForecast.predictTrend());
  console.log('- Екстремальні умови?', todayWeather.checkExtreme() ? 'Так' : 'Ні');
}