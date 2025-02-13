import { Car } from "./Car";
import { Driver } from "./Driver";
import { CarType } from "./CarType";

// Создаем автомобили
const cars = [
  new Car("Ferrari F1", 2004, 300, CarType.F1_Auto),
  new Car("Renault F1", 2006, 290, CarType.F1_Auto),
  new Car("Ford Mustang Hoonicorn", 2021, 280, CarType.Coupe),
  new Car("Subaru Impreza WRX", 2005, 260, CarType.SUV),
  new Car("Peugeot 206 WRC", 2003, 250, CarType.Hatchback),
];

// Создаем водителей
const drivers = [
  new Driver(
    "Michael",
    "Schumacher",
    52,
    cars[0],
    1989,
    "https://www.autozeitung.de/assets/styles/article_image/public/field/image/michael-schumacher-01.jpg?itok=Meb6yDGI",
    "https://image.gala.de/24228906/t/TO/v3/w1440/r1.5/-/13--sein-letzter-ferrari-wird-versteigert---3-2---spoton-article-1079753.jpg"
  ),
  new Driver(
    "Fernando",
    "Alonso",
    41,
    cars[1],
    2000,
    "https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1698945659/trackside-images/2023/F1_Grand_Prix_of_Brazil___Previews/1771000913.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/48/Fernando_Alonso_2004_Canada.jpg"
  ),
  new Driver(
    "Ken",
    "Block",
    55,
    cars[2],
    1992,
    "https://www.autosprint.ch/wp-content/uploads/2023/01/Ken-Block-starb_autosprint.ch_.jpg",
    "https://www.topgear.com/sites/default/files/images/news-article/carousel/2016/10/ea5d8506b7771c1b2a4db22d8c54aa3b/hrd_2487.1.jpg"
  ),
  new Driver(
    "Colin",
    "McRae",
    39,
    cars[3],
    1985,
    "https://www.autohebdo.fr/app/uploads/2021/06/0915-141613.jpg",
    "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/gbxhgzpewhxnjfxj1v7l"
  ),
  new Driver(
    "Sebastien",
    "Loeb",
    48,
    cars[4],
    1995,
    "https://www.autohebdo.fr/app/uploads/2021/06/05121000_116-scaled.jpg",
    "https://collectorscarworld.com/wp-content/uploads/2022/04/1-9.jpeg"
  ),
];

// Экспортируем данные
export { cars, drivers };
