let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
movieTitle.toLowerCase();

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = true;

let nothing: null = null;
let foo: undefined = undefined;

// type inference
let someString = 'someString';
someString = 'yes, ts knows this is a string';

// any type
let thing: any = 'hello';
thing = 1;
thing = false;

// type annotation
const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus'];
let foundMovie: string;
for (let movie of movies) {
  if (movie === 'Amadeus') foundMovie = 'Amadeus';
}
