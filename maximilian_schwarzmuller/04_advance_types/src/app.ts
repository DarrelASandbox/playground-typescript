type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection Type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['read'],
  startDate: new Date(),
};

type CombineEmployee = Employee | Admin;

const printEmployeeInformation = (emp: CombineEmployee) => {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) console.log('Privileges: ' + emp.privileges);
  if ('startDate' in emp) console.log('Start Date: ' + emp.startDate);
};

printEmployeeInformation(e1);

// Union Types
type CombineType1 = string | number;
type CombineType2 = boolean | number;
type CombineType3 = CombineType1 & CombineType2; // Intersection Type: number

// Type Guard
const add = (a: CombineType1, b: CombineType1) => {
  if (typeof a === 'string' || typeof b === 'string') return a.toString() + b.toString();
  return a + b;
};

class Car {
  driver() {
    console.log('Driving on the highway... in this mini cooper');
  }
}

class Truck {
  driver() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.driver();
  if (vehicle instanceof Truck) vehicle.loadCargo(1000);
};

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
type Bird = {
  type: 'bird';
  flyingSpeed: number;
};

type Horse = {
  type: 'horse';
  runningSpeed: number;
};

type Animal = Bird | Horse;

const animalSpeed = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed);
};

animalSpeed({ type: 'bird', flyingSpeed: 10 });

// Type Casting Syntax 1
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// Type Casting Syntax 2 (So that there is no conflict with React syntax)
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
userInputElement.value = 'Hi there!';

// Index Properties
// Set type for multiple properties
type ErrorContainer = {
  [prop: string]: string;
};

const errorList: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character',
};
