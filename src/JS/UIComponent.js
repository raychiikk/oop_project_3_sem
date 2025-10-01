// Абстрактний клас UIComponent є базою для всіх елементів інтерфейсу.
// Використовується для успадкування та динамічного поліморфізму.
// Містить абстрактний метод render, який має бути перевизначений.
export class UIComponent {
    // Приватне поле для DOM-елемента, який представляє компонент.
    #element;

    // Конструктор створює базовий елемент, але забороняє пряме використання класу.
    constructor() {
    if (new.target === UIComponent) throw new Error("Abstract class cannot be instantiated");
    this.#element = document.createElement('div');
    }

    // Абстрактний метод, який має бути реалізований у дочірніх класах.
    render() { throw new Error("Method 'render' must be implemented"); }

    // Getter для доступу до DOM-елемента (тривіальний метод).
    getElement() { return this.#element; }
}