// Клас WeatherAlert моделює сповіщення про небезпечні погодні умови.
// Використовує інкапсуляцію для зберігання типу сповіщення та порогу.
// Може бути частиною ієрархії або використовуватися самостійно для інформування.
export class WeatherAlert {
    // Приватне поле для типу сповіщення (наприклад, "Storm Warning" або "Heat Alert").
    #alertType;
    // Приватне поле для температури, при якій спрацьовує сповіщення.
    #threshold;

    // Конструктор ініціалізує тип сповіщення та пороговий рівень температури.
    constructor(alertType, threshold) {
    this.#alertType = alertType;
    this.#threshold = threshold;
    }

    // Getter для отримання типу сповіщення (тривіальний метод).
    getAlertType() { return this.#alertType; }

    // Нетривіальний метод, який перевіряє, чи потрібно видати сповіщення на основі температури.
    checkAlert(temperature) {
    return temperature >= this.#threshold ? `${this.#alertType}: Temperature ${temperature}°C exceeds ${this.#threshold}°C!` : null;
    }

    // Нетривіальний метод, який повертає рекомендацію для користувача залежно від типу сповіщення.
    getRecommendation() {
    switch (this.#alertType) {
        case 'Storm Warning': return 'Stay indoors and avoid travel.';
        case 'Heat Alert': return 'Stay hydrated and avoid direct sunlight.';
        default: return 'Follow local guidelines.';
    }
    }
}