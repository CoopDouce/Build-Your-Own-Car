// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";
import inquirer from "inquirer";

// create an array of vehicles
const vehicles = [];

// TODO: uncomment once trucks are implemented
 const truck1 = new Truck(
  Cli.generateVin(),
  "Red",
  "Ford",
  "F-150",
  2021,
  5000,
  120,
  [],
  10000);

 const truck2 = new Truck(
  Cli.generateVin(),
  "White",
  "Ford",
  "COE Hauler",
  1956,
  22500,
  70,
  [],
  24000);

// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'Blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

const car2 = new Car(
 Cli.generateVin(),
 'Green',
 'Porsche',
 'GT3',
 2015,
 3100,
 190,
 []
);

const car3 = new Car(
  Cli.generateVin(),
  'Orange',
  'Honda',
  'RB20',
  2024,
  1700,
  220,
  []
);

// TODO: uncomment once motorbikes are implemented
 const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
 const motorbike2Wheels = [new Wheel(19, "Pirelli"), new Wheel(16, "Pirelli")];

 const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "Black",
  "Harley Davidson",
  "Sportster",
  2021,
  500,
  125,
  motorbike1Wheels
  );

 const motorbike2 = new Motorbike(
  Cli.generateVin(),
  'Red',
  'Indian',
  'Scout',
  2025,
  550,
  110,
  motorbike2Wheels
  );

// push vehicles to array
// TODO: uncomment once trucks are implemented
vehicles.push(truck1);
vehicles.push(truck2);

vehicles.push(car1);
vehicles.push(car2);
vehicles.push(car3);
// TODO: uncomment once motorbikes are implemented
vehicles.push(motorbike1);
vehicles.push(motorbike2);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
