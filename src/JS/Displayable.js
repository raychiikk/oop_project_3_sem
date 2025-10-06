// інтерфейс-подібний клас Displayable визначає контракт для відображення даних, 
// використовується для динамічного поліморфізму через абстрактний метод display
export class Displayable {
    // буде реалізований у дочірніх класах пізніше
    display() { 
        throw new Error("Must implement display"); 
    }

    // статичний метод для перевірки, чи реалізовано контракт Displayable у об’єкта
    static isImplementedBy(obj) {
        return obj && typeof obj.display === 'function';
    }
}

