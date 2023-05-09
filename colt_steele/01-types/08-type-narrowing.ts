// typeof guard
const triple = (value: number | string) => {
  if (typeof value === 'string') return value.repeat(3);
  return value * 3;
};

// truthiness guard
const printLetters = (word?: string) => {
  if (word)
    for (const char of word) {
      console.log(char);
    }
  else console.log('Input is undefined');
};

// equality narrowing
const someDemo = (x: string | number, y: string | boolean) => {
  if (x === y) x.toUpperCase();
};

// in operator narrowing
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

const getRuntime = (media: Movie | TVShow) => {
  if ('numEpisodes' in media) return media.numEpisodes * media.episodeDuration;
  return media.duration;
};

console.log(getRuntime({ title: 'Amadeus', duration: 140 }));
console.log(getRuntime({ title: 'Spongebob', numEpisodes: 80, episodeDuration: 30 }));

// instanceof narrowing
const printFullDate = (date: string | Date) => {
  if (date instanceof Date) console.log(date.toUTCString());
  else console.log(new Date(date).toUTCString());
};

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

const printName = (entity: User | Company) => {
  if (entity instanceof User) return entity; // type entity
  return entity; // type company
};

// type predicates
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

const isCat = (animal: Cat | Dog): animal is Cat =>
  (animal as Cat).numLives !== undefined;

const makeNoise = (animal: Cat | Dog): string => {
  if (isCat(animal)) return 'Meow';
  else return 'Woof';
};

// discriminated union
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: 'rooster';
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: 'cow';
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: 'pig';
}

// uncomment to see error at `_exhaustiveCheck`
// interface Sheep {
//   name: string;
//   weight: number;
//   age: number;
//   kind: 'sheep';
// }

// type FarmAnimal = Pig | Rooster | Cow | Sheep;
type FarmAnimal = Pig | Rooster | Cow;

const getFarmAnimalSound = (animal: FarmAnimal) => {
  switch (animal.kind) {
    case 'rooster':
      return 'Coke!';
    case 'cow':
      return 'Moo!';
    case 'pig':
      return 'Oink!';

    // exhaustiveness checks with never
    default:
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
};

const stevie: Rooster = {
  name: 'Stevie chicks',
  weight: 2,
  age: 1.5,
  kind: 'rooster',
};

console.log(getFarmAnimalSound(stevie));
