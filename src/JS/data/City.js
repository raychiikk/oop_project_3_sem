// клас City представляє географічне місце з назвою та країною, інкапсвульованими як приватні поля

export class City {
    #name;
    #country;

    constructor(name, country) {
    this.#name = name;
    this.#country = country;
    }

    // getter для отримання назви міста
    getName() { return this.#name; }

    // нетривіальний метод, який повертає деталі локації у форматі рядка, демонструє обробку приватних полів
    getLocationDetails() { return `${this.#name}, ${this.#country}`; }

    // нетривіальний метод, який імітує пошук сусідніх міст (поки повертає тільки фіксований список)
    findNearby() { return ['Lviv', 'Odessa']; }
}