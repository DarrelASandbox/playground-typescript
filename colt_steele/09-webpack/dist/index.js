import { Dog } from './Dog.js';
import { ShelterDog } from './ShelterDog.js';
import { add, divide, multiply } from './utils.js';
const elton = new Dog('Elton', 'Aussie', 0.5);
elton.bark();
console.log(add(3, 5));
console.log(divide(5, 5));
console.log(multiply(6, 5));
const buffy = new ShelterDog('Buffy', 'Pitbull', 5, 'Desert Spring Shelter');
