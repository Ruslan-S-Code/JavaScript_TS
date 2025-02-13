import { Car } from "./Car";

export class Driver {
  private _firstName: string;
  private _lastName: string;
  private _age: number;
  private _car: Car;
  private _licenseFromYear: number;
  private _photoUrl: string; // Фото водителя
  private _carPhotoUrl: string; // Фото автомобиля

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    car: Car,
    licenseFromYear: number,
    photoUrl: string,
    carPhotoUrl: string
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._car = car;
    this._licenseFromYear = licenseFromYear;
    this._photoUrl = photoUrl;
    this._carPhotoUrl = carPhotoUrl;
  }

  // Геттеры
  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get age(): number {
    return this._age;
  }

  public get car(): Car {
    return this._car;
  }

  public get licenseFromYear(): number {
    return this._licenseFromYear;
  }

  public get photoUrl(): string {
    return this._photoUrl;
  }

  public get carPhotoUrl(): string {
    return this._carPhotoUrl;
  }
}
