// Определяем класс Animal
class Animal {
  private _species: string;
  private _age: number;
  private _color: string;

  constructor(species: string, age: number, color: string) {
    this._species = species;
    this._age = age;
    this._color = color;
  }

  // Get- и Set-методы для свойства species
  public get species(): string {
    return this._species;
  }

  public set species(value: string) {
    this._species = value;
  }

  // Get- и Set-методы для свойства age
  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }

  // Get- и Set-методы для свойства color
  public get color(): string {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }
}

// Определяем перечисление для пола
enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

// Определяем класс Person
class Person {
  private _name: string;
  private _gender: Gender;
  private readonly _birthday: Date;

  constructor(name: string, birthday: Date, gender: Gender) {
    this._name = name;
    this._birthday = birthday;
    this._gender = gender;
  }

  // Get-метод для свойства name
  public get name(): string {
    return this._name;
  }

  // Set-метод для свойства name
  public set name(value: string) {
    this._name = value;
  }

  // Get-метод для свойства gender
  public get gender(): Gender {
    return this._gender;
  }

  // Set-метод для свойства gender
  public set gender(value: Gender) {
    this._gender = value;
  }

  // Get-метод для свойства birthday
  public get birthday(): Date {
    return this._birthday;
  }
}

// Пример использования классов
const myAnimal = new Animal("Cat", 3, "Black");
console.log(myAnimal.species); // "Cat"
myAnimal.age = 4; // Изменяем возраст
console.log(myAnimal.age); // 4

const person = new Person("Alice", new Date(1990, 5, 15), Gender.Female);
console.log(person.name); // "Alice"
console.log(person.birthday); // "1990-06-15T00:00:00.000Z"
person.gender = Gender.Other; // Изменяем пол
console.log(person.gender); // "Other"
