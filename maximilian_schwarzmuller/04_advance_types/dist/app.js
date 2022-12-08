"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['read'],
    startDate: new Date(),
};
const printEmployeeInformation = (emp) => {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp)
        console.log('Privileges: ' + emp.privileges);
    if ('startDate' in emp)
        console.log('Start Date: ' + emp.startDate);
};
printEmployeeInformation(e1);
const add1 = (a, b) => {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
};
function add2(a, b) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
}
const someNumber = add2(1, 5);
const someString = add2('Mad', 'Max');
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'Company XYZ' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
class Car {
    driver() {
        console.log('Driving on the highway... in this mini cooper');
    }
}
class Truck {
    driver() {
        console.log('Driving a truck...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.driver();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(1000);
};
useVehicle(v1);
useVehicle(v2);
const animalSpeed = (animal) => {
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
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'Hi there!';
const errorList = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character',
};
