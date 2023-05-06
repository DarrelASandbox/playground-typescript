const activeUsers: string[] = [];
activeUsers.push('Colt');

// alternative syntax
const ageList: Array<number> = [];

type Point = { x: number; y: number };
const coords: Point[] = [];
coords.push({ x: 33, y: 3 });
coords.push({ x: 44, y: 4 });
console.log(coords);

// array of arrays
const board: string[][] = [
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
];

// **********************************************
// ************** arraysExercise ****************
// **********************************************
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const age: string[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = { name: string; price: number };
const product1: Product = { name: 'coffee mug', price: 5 };

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const getTotal = (products: Product[]): number =>
  products.reduce((acc, { price }: Product) => acc + price, 0);

console.log(
  getTotal([
    { name: 'coffee mug', price: 5 },
    { name: 'coffee table', price: 50 },
    { name: 'coffee machine', price: 500 },
  ])
);
