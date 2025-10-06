// unit tests for WeatherData, Forecast, City, ForecastDisplay, WeatherCondition, RainyCondition, Displayable, UIComponent, WeatherProcessor, WeatherDisplay,  classes
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

let currentWeather, weatherDisplay, forecastDisplay, forecast;

export function runClassTests() {
  console.log('ТЕСТУВАННЯ КЛАСІВ ООП');
  console.log('=====================');

  try {
    // 1. тестуємо WeatherData
    console.log('1. ТЕСТ WeatherData:');
    currentWeather = new WeatherData(15, 'Хмарно', 60, 10, 1015, 30, 2, 8); // З новими параметрами
    console.log('Температура:', currentWeather.getTemperature() + '°C');
    console.log('Погодний опис:', currentWeather.getWeatherSummary());
    console.log('Екстремальна температура?', currentWeather.checkExtreme());
    console.log('Вологість:', currentWeather.getHumidity() + '%');
    console.log('Швидкість вітру:', currentWeather.getWindSpeed() + ' м/с');
    console.log('Тиск:', currentWeather.getPressure() + ' hPa');
    console.log('Хмарність:', currentWeather.getCloudCover() + '%');
    console.log('Опади:', currentWeather.getPrecipitation() + ' мм');
    console.log('Видимість:', currentWeather.getVisibility() + ' км');

    currentWeather.setTemperature(35);
    currentWeather.setHumidity(70);
    currentWeather.setWindSpeed(15);
    currentWeather.setPressure(1000);
    currentWeather.setCloudCover(50);
    currentWeather.setPrecipitation(5);
    currentWeather.setVisibility(5);

    console.log('Оновлена температура:', currentWeather.getTemperature() + '°C');
    console.log('Тепер екстремальна?', currentWeather.checkExtreme());
    console.log('Оновлена вологість:', currentWeather.getHumidity() + '%');
    console.log('Оновлена швидкість вітру:', currentWeather.getWindSpeed() + ' м/с');
    console.log('Оновлений тиск:', currentWeather.getPressure() + ' hPa');
    console.log('Оновлена хмарність:', currentWeather.getCloudCover() + '%');
    console.log('Оновлені опади:', currentWeather.getPrecipitation() + ' мм');
    console.log('Оновлена видимість:', currentWeather.getVisibility() + ' км');
  } catch (e) {
    console.error('Помилка в тесті WeatherData:', e.message);
  }

  try {
    // 2. тестуємо City
    console.log('2. ТЕСТ City:');
    const kyiv = new City('Київ', 'Україна');
    console.log('Назва міста:', kyiv.getName());
    console.log('Деталі локації:', kyiv.getLocationDetails());
    console.log('Сусідні міста:', kyiv.findNearby());
  } catch (e) {
    console.error('Помилка в тесті City:', e.message);
  }

  try {
    // 3. тестуємо Forecast
    console.log('3. ТЕСТ Forecast:');
    forecast = new Forecast();
    forecast.addDay(new WeatherData(18, 'Сонячно'));
    forecast.addDay(new WeatherData(16, 'Легка хмарність'));
    forecast.addDay(new WeatherData(14, 'Дощ'));
    forecast.addDay(new WeatherData(20, 'Ясно'));
    console.log('Середня температура:', forecast.getAverageTemp().toFixed(1) + '°C');
    console.log('Тенденція:', forecast.predictTrend());
  } catch (e) {
    console.error('Помилка в тесті Forecast:', e.message);
  }

  try {
    // 4. тестуємо UIComponent, WeatherDisplay, ForecastDisplay (динамічний поліморфізм)
    console.log('4. ТЕСТ UIComponent та спадкоємці:');
    try {
      new UIComponent();
    } catch (e) {
      console.log('UIComponent тест: Абстрактний клас працює -', e.message);
    }
    weatherDisplay = new WeatherDisplay();
    forecastDisplay = new ForecastDisplay();
    weatherDisplay.render(currentWeather);
    forecastDisplay.render(forecast);
  } catch (e) {
    console.error('Помилка в тесті UIComponent та спадкоємців:', e.message);
  }

  try {
    // 5. тестуємо WeatherCondition та RainyCondition
    console.log('5. ТЕСТ WeatherCondition та RainyCondition:');
    const condition = new WeatherCondition('Sunny');
    console.log('Базова умова:', condition.describe());
    const rainy = new RainyCondition('Heavy');
    console.log('Дощова умова:', rainy.describe());
  } catch (e) {
    console.error('Помилка в тесті WeatherCondition та RainyCondition:', e.message);
  }

  try {
    // 6. тестуємо Displayable (динамічний поліморфізм)
    console.log('6. ТЕСТ Displayable:');
    const displayables = [weatherDisplay, forecastDisplay];
    displayables.forEach((d, i) => {
      if (!Displayable.isImplementedBy(d)) {
        console.warn(` Об'єкт #${i + 1} не реалізує Displayable!`);
      } else {
        console.log(`Об'єкт #${i + 1} реалізує Displayable`);
        d.display(); // виклик конкретної реалізації
      }
    });
  } catch (e) {
    console.error('Помилка в тесті Displayable:', e.message);
  }

  try {
    // 7. тестуємо статичний поліморфізм (processData)
    console.log('7. ТЕСТ Статичного поліморфізму (processData):');
    console.log('Температура одного дня:', processData(currentWeather));
    console.log('Температури прогнозу:', processData(forecast.getData()));
  } catch (e) {
    console.error('Помилка в тесті processData:', e.message);
  }

  try {
    // 8. тестуємо статичний поліморфізм (WeatherProcessor)
    console.log('8. ТЕСТ Статичного поліморфізму (WeatherProcessor):');
    console.log('Обробка одного дня:', WeatherProcessor.process(currentWeather));
    console.log('Обробка масиву:', WeatherProcessor.processArray(forecast.getData().map((_, i) => new WeatherData(15 + i, 'Test'))));
  } catch (e) {
    console.error('Помилка в тесті WeatherProcessor:', e.message);
  }

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