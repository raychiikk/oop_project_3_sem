// абстрактний клас UIComponent є базою для всіх елементів інтерфейсу, успадкування та динамічний поліморфізм
export class UIComponent {
    // Приватне поле для DOM-елемента, який представляє компонент.
    #element;

    // Конструктор створює базовий елемент, але забороняє пряме використання класу.
    constructor() {
    if (new.target === UIComponent) throw new Error("Abstract class cannot be instantiated");
    this.#element = document.createElement('div');
    }

    // буде реалізований у дочірніх класах пізніше (динамічний поліморфізм)
    render() { throw new Error("Method 'render' must be implemented"); }

    // getter для доступу до DOM-елемента 
    getElement() { return this.#element; }
}