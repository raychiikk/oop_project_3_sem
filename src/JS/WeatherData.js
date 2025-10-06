// клас WeatherData представляє дані про поточну погоду, інкапсуляція
export class WeatherData {
    #temperature;
    #description;
    #humidity;      // вологість у відсотках
    #windSpeed;     
    #pressure;      // атмосферний тиск в hPa
    #cloudCover;    
    #precipitation; // опади в мм
    #visibility;   

    constructor(temp, desc, humidity = 50, windSpeed = 5, pressure = 1013, cloudCover = 0, precipitation = 0, visibility = 10) {
        this.#temperature = temp;
        this.#description = desc;
        this.#humidity = humidity;
        this.#windSpeed = windSpeed;
        this.#pressure = pressure;
        this.#cloudCover = cloudCover;
        this.#precipitation = precipitation;
        this.#visibility = visibility;
    }

    getTemperature() { return this.#temperature; }
    setTemperature(temp) { this.#temperature = temp; }

    // нетривіальний метод, який повертає зведену інформацію про погоду у форматі рядка
    getWeatherSummary() { return `${this.#temperature}°C, ${this.#description}`; }
    
    // нетривіальний метод, який перевіряє, чи температура є екстремальною (> 30°C) для аналізу погодних умов
    checkExtreme() { return this.#temperature > 30; }

    getHumidity() { return this.#humidity; }
    setHumidity(humidity) { this.#humidity = humidity; }

    getWindSpeed() { return this.#windSpeed; }
    setWindSpeed(windSpeed) { this.#windSpeed = windSpeed; }

    getPressure() { return this.#pressure; }
    setPressure(pressure) { this.#pressure = pressure; }

    getCloudCover() { return this.#cloudCover; }
    setCloudCover(cloudCover) { this.#cloudCover = cloudCover; }

    getPrecipitation() { return this.#precipitation; }
    setPrecipitation(precipitation) { this.#precipitation = precipitation; }

    getVisibility() { return this.#visibility; }
    setVisibility(visibility) { this.#visibility = visibility; }
}