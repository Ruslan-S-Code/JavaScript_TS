export class Actor {
  firstName: string;
  lastName: string;
  birthday: Date;
  gender: string;

  constructor(
    firstName: string,
    lastName: string,
    birthday: Date,
    gender: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.gender = gender;
  }
}
