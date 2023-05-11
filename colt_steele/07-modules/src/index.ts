import { User } from './User.js'; // `.js` is important
import { add, sample } from './utils.js';

console.log(sample([1, 2, 3]));
console.log(add(1, 2));

const user1 = new User('John', 'john@gmail.com');
console.log(user1.logout());
