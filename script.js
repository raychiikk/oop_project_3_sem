import { WeatherData } from './JS/WeatherData.js';
import { Forecast } from './JS/Forecast.js';
import { City } from './JS/City.js';

const weather = new WeatherData(25, 'Cloudy');
const forecast = new Forecast();
forecast.addDay(weather);
console.log(weather.getWeatherSummary(), forecast.getAverageTemp());
const city = new City('Kyiv', 'Ukraine');
console.log(city.getLocationDetails());