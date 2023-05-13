import { Dog } from './Dog';
import { ShelterDog } from './ShelterDog';
import { add, divide, multiply } from './utils';

const elton = new Dog('Elton', 'Aussie', 0.5);
elton.bark();

console.log(add(3, 5));
console.log(divide(5, 5));
console.log(multiply(6, 5));

const buffy = new ShelterDog('Buffy', 'Pitbull', 5, 'Desert Spring Shelter');
