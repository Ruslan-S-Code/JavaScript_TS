import { CarType } from "./CarType";

export class Car {
  private _brand: string;
  private _constructionYear: number;
  private _currentSpeed: number;
  private _carType: CarType;

  constructor(
    brand: string,
    constructionYear: number,
    currentSpeed: number = 0,
    carType: CarType = CarType.Unknown
  ) {
    this._brand = brand;
    this._constructionYear = constructionYear;
    this._currentSpeed = currentSpeed;
    this._carType = carType;
  }

  // Геттеры
  public get brand(): string {
    return this._brand;
  }

  public get constructionYear(): number {
    return this._constructionYear;
  }

  public get currentSpeed(): number {
    return this._currentSpeed;
  }

  public get carType(): CarType {
    return this._carType;
  }

  // Сеттеры
  public set currentSpeed(speed: number) {
    this._currentSpeed = speed;
  }

  public set carType(type: CarType) {
    this._carType = type;
  }

  // Метод для получения информации о скорости
  public getSpeedInfo(): string {
    if (this._currentSpeed <= 40) {
      return "Driving slowly";
    } else if (this._currentSpeed > 40 && this._currentSpeed <= 70) {
      return "Driving normally";
    } else if (this._currentSpeed > 70 && this._currentSpeed <= 120) {
      return "Driving fast";
    } else if (this._currentSpeed > 120 && this._currentSpeed <= 190) {
      return "Driving really fast";
    } else {
      return "WTF";
    }
  }
}
