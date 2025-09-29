// unit tests for City, WeatherData, Forecast classes
import { WeatherData } from './WeatherData.js';
import { Forecast } from './Forecast.js';
import { City } from './City.js';

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
    
    console.log('Місто:', kyiv.getLocationDetails());
    console.log('Сьогодні:', todayWeather.getWeatherSummary());
    console.log('Прогноз на тиждень:');
    console.log('- Середня температура:', weeklyForecast.getAverageTemp().toFixed(1) + '°C');
    console.log('- Тенденція:', weeklyForecast.predictTrend());
    console.log('- Екстремальні умови?', todayWeather.checkExtreme() ? 'Так' : 'Ні');
}