// type inference for return type
const square = (num: number) => console.log(num * num);
const hello = (person = 'Colt') => console.log(`${person}`);

// type annotation for both parameter type and return type
const add = (num: number): number => num + num;
const selfIntroduction = (person: string, age: number = 9): string =>
  `Hi, I am ${person}, age ${age} years old.`;

// anonymous function contextual typing
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));

// void return type doesn't return any data
const printTwice = (msg: string): void => {
  console.log(msg);
  console.log(msg);
  return undefined;
};

// never type
const makeError = (msg: string): never => {
  throw new Error(msg);
};

square(6);
hello();
console.log(add(6));
console.log(selfIntroduction('colt'));
printTwice('This is a message.');

// **********************************************
// ************* functionsExercise **************
// **********************************************
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

const twoFer = (name: string = 'you'): string => `one for ${name}, one for me`;
twoFer();

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapYear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

const isLeapYear = (year: number): boolean =>
  (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
