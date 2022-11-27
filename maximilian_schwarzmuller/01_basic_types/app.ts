const add = (showAnswer: boolean, description: string, n1: number, n2: number) =>
  showAnswer && console.log(description + (n1 + n2));

const printAnswer = true;
const num1 = 5;
const num2 = 2.8;
const description = `${num1} + ${num2} = `;

add(printAnswer, description, num1, num2);

const date1 = new Date().getFullYear();
const date2 = new Date('10/1/2012').getFullYear();
const age = date1 - date2;

// Explicitly assign types
enum Role {
  ADMIN = 1, // Set index as 1
  READ_ONLY,
  AUTHOR = 'Author', // Set index as "Author"
}

const person: {
  name: string;
  age: number;
  tags: string[];
  details: { description: string; lovable: boolean };
  tuple: [string, number, boolean];
  role: Role;
} = {
  name: 'TypeScript',
  age,
  details: { description: 'A better JavaScript', lovable: true },
  tags: ['static', 'types'],
  tuple: ['Fixed length array', 2, true],
  role: Role.AUTHOR,
};

person.tuple.push('CaN StILl PuSH iNTo TUplE UnLeSS wE sTAtE `readonly`');
console.log(JSON.stringify(person, null, 2));
