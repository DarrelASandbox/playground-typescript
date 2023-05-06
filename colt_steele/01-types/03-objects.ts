const printDog = (dog: { name: string; breed: string }): string =>
  `This is ${dog.name} a ${dog.breed} breed.`;

// Cannot pass excess properties inline with object literal
// console.log(printDog({ name: 'Elton', breed: 'Australian Shepherd', age: 5 }));
const dog = { name: 'Elton', breed: 'Australian Shepherd', age: 5 };

// variables
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

const randomCoordinates = (): { x: number; y: number } => {
  const x = Math.floor(Math.random() * 101); // Generates a random integer between 0 and 100
  const y = Math.floor(Math.random() * 101); // Generates a random integer between 0 and 100
  return { x, y };
};

const scalePoint = (point: { x: number; y: number }): { x: number; y: number } => {
  return { x: point.x * 2, y: point.y * 3 };
};

// type alias
// optional property
type Point = { x: number; y: number; z?: number };
const scalePoint2 = (point: Point): Point => {
  return { x: point.x * 2, y: point.y * 3 };
};

// nested objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

const calculatePayout = (song: Song): number => song.numStreams * 0.333;
const printSong = (song: Song): void => console.log(`${song.title} - ${song.artist}`);

const song1: Song = {
  title: 'Newbie Melody',
  artist: 'Ian Tylor',
  numStreams: 777777,
  credits: { producer: 'Ian Tylor', writer: 'Ian Tylor' },
};

// readonly modifier
type User = {
  readonly id: number;
  username: string;
};

const user: User = { id: 12837, username: 'cat77' };

// intersection types
type Circle = { radius: number };
type Colorful = { color: string };
type ColorfulCircle = Circle & Colorful & { is3d: boolean };

const colorfulCircle: ColorfulCircle = { radius: 4, color: 'rainbow', is3d: true };

console.log(printDog({ name: 'Elton', breed: 'Australian Shepherd' }));
console.log(printDog(dog));
console.log(randomCoordinates());
console.log(calculatePayout(song1));
console.log(song1);
console.log(colorfulCircle);

// **********************************************
// ************** objectsExercise ***************
// **********************************************
// Write the Movie type alias to make the following two variables properly typed

type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

// Make sure that "originalTitle" is optional and "title" is readonly
const dune: Movie = {
  title: 'Dune',
  originalTitle: 'Dune Part One',
  director: 'Denis Villeneuve',
  releaseYear: 2021,
  boxOffice: {
    budget: 165000000,
    grossUS: 108327830,
    grossWorldwide: 400671789,
  },
};

const cats: Movie = {
  title: 'Cats',
  director: 'Tom Hooper',
  releaseYear: 2019,
  boxOffice: {
    budget: 95000000,
    grossUS: 27166770,
    grossWorldwide: 73833348,
  },
};

// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget
// For example...
// getProfit(cats) => -21166652

const getProfit = ({ boxOffice: { grossWorldwide, budget } }: Movie): number =>
  grossWorldwide - budget;

console.log(getProfit(cats));
