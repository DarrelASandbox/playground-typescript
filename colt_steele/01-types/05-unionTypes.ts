let age: number | string = 27;
age = '23';

type Point = { x: number; y: number };
type Loc = { lat: number; lon: number };
let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, lon: 23.334 };

// type narrowing
const calculatePrice = (price: number | string, tax: number) => {
  if (typeof price === 'string') price = parseFloat(price.replace('$', ''));
  return price * tax;
};

console.log(calculatePrice('$100', 5));
console.log(calculatePrice('10', 5));
console.log(calculatePrice(1, 5));

// parenthesis is important
const things: (number | string)[] = ['1', 2];
// Array of all numbers or strings
const things2: number[] | string[] = [1, 2];
// Array of arrays with all numbers or string
const things3: (number[] | string[])[] = [
  [1, 2],
  ['1', '2'],
];

// literal types
const zero: 0 = 0;
type UserAnswer = 'yes' | 'y' | 'no' | 'n';
const userAnswer: UserAnswer = 'yes';

// **********************************************
// ************** unionExercise ****************
// **********************************************
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean

let highScore: number | boolean;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)

let stuff: (number | string)[];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: 'ski' | 'snowboard';
  level: SkillLevel;
};

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

// Create an array called colors that can hold a mixture of RGB and HSL color types

type RGB = { r: number; g: number; b: number };
type HSL = { h: number; s: number; l: number };
let colors: (RGB | HSL)[];

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (names: string | string[]) =>
  typeof names === 'string'
    ? console.log(`Hello, ${names}`)
    : names.forEach((name) => console.log(`Hello, ${name}`));

greet('Elliot');
greet(['Jimmy', 'Tommy', 'Loony']);
