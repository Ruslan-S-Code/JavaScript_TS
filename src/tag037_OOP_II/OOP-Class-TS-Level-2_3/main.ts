class Customer {
  private _name: string = ""; // Значение по умолчанию
  private _email: string = "";
  private _address: string = "";
  private _postalCode: string = "";
  private _city: string = "";

  constructor(
    name: string,
    email: string,
    address: string,
    postalCode: string,
    city: string
  ) {
    this.name = name; // Используем сеттер
    this.email = email; // Используем сеттер
    this.address = address;
    this.postalCode = postalCode; // Используем сеттер
    this.city = city;
  }

  // Геттеры
  public get name(): string {
    return this._name;
  }

  public get email(): string {
    return this._email;
  }

  public get address(): string {
    return this._address;
  }

  public get postalCode(): string {
    return this._postalCode;
  }

  public get city(): string {
    return this._city;
  }

  // Сеттеры
  public set name(value: string) {
    if (value.length > 60) {
      console.error("Fehler: Der Name darf nicht länger als 60 Zeichen sein.");
    } else {
      this._name = value;
    }
  }

  public set email(value: string) {
    if (!value.includes("@") || !value.includes(".")) {
      console.error(
        "Fehler: Die E-Mail-Adresse muss ein '@'-Zeichen und einen Punkt enthalten."
      );
    } else {
      this._email = value;
    }
  }

  public set address(value: string) {
    this._address = value;
  }

  public set postalCode(value: string) {
    if (!/^\d{5}$/.test(value)) {
      console.error(
        "Fehler: Die Postleitzahl muss 5-stellig sein und aus Zahlen bestehen."
      );
    } else {
      this._postalCode = value;
    }
  }

  public set city(value: string) {
    this._city = value;
  }
}

// Пример использования класса
const customer = new Customer(
  "Max Mustermann",
  "max.mustermann@example.com",
  "Musterstraße 1",
  "12345",
  "Musterstadt"
);

// Проверяем геттеры и сеттеры
console.log("Name:", customer.name); // Вывод текущего имени
customer.name = "Hans Meier"; // Меняем имя
console.log("Neuer Name:", customer.name); // Вывод нового имени

customer.email = "invalid-email"; // Пробуем задать некорректный email
console.log("E-Mail:", customer.email); // Проверяем, изменился ли email

customer.postalCode = "1234"; // Некорректный индекс
customer.postalCode = "54321"; // Корректный индекс
console.log("Postleitzahl:", customer.postalCode);
