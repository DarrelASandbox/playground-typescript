import axios from 'axios';
import _ from 'lodash';

// has `index.d.ts` which contains type definition
axios
  .get('https://jsonplaceholder.typicode.com/users/1')
  .then((res) => console.log(res.data))
  .catch((e) => console.log(e));

// using custom interface User base on endpoint
interface User {
  id: number;
  name: number;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const printUser = (user: User) => {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
};

axios
  .get<User>('https://jsonplaceholder.typicode.com/users/1')
  .then(
    (res) => printUser(res.data) // data of type user
  )
  .catch((e) => console.log(e));

// using all users endpoint
// so state an array of User type
axios
  .get<User[]>('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.data.forEach(printUser))
  .catch((e) => console.log(e));

// **********************************************

_.sample([1, 2, 3, 4, 5, 6]);

// **********************************************
