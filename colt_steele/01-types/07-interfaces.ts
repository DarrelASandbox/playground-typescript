/*
- Can only describe object shapes
- Can be extended by declaring it multiple times
- In performance critical types interface comparison checks can be faster
*/

interface User {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  greetings: (name: string) => string; // interface method & parameter
}

const user1: User = {
  id: 1,
  first: 'Thomas',
  last: 'Hardy',
  nickname: 'Tom',
  greetings: (name: string) => `Hello there, ${name}`,
};

interface Dog {
  name: string;
  age: number;
}

// reopening interface (declaration merging)
interface Dog {
  breed: string;
  bark: () => string;
}

const goodBoy: Dog = {
  name: 'Eltron',
  age: 5,
  breed: 'Australian Shepherd',
  bark: () => 'Woof woof!',
};

// extending interface
interface ServiceDog extends Dog {
  job: 'Guide Dog' | 'Hearing Dog' | 'Psychiatric Service Dog';
}

const chewy: ServiceDog = {
  name: 'Chewy',
  age: 500,
  breed: 'Lab',
  bark: () => 'Meow!',
  job: 'Guide Dog',
};

interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  programming_languages: string[];
}

const pierre: Engineer = {
  name: 'Pierre',
  id: 1,
  email: 'pierre@work.com:',
  programming_languages: ['Rust', 'Golang', 'TypeScript', 'JavaScript', 'Python'],
};

user1.first = 'Jimmy';
console.log(user1);
console.log(user1.greetings('Julie'));
console.log(goodBoy);
console.log(chewy);
console.log(pierre);
