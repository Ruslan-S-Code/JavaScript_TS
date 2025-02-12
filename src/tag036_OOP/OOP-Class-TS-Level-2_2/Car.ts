export class Car {
  brand: string;
  constructionYear: number;
  currentSpeed: number;

  constructor(
    brand: string,
    constructionYear: number,
    currentSpeed: number = 0
  ) {
    this.brand = brand;
    this.constructionYear = constructionYear;
    this.currentSpeed = currentSpeed;
  }
}
