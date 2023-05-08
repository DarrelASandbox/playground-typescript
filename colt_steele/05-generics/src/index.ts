const nums: Array<number> = [];
const colors: Array<string> = [];

// Built-in generics
const inputEl = document.querySelector<HTMLInputElement>('#username')!;
console.log(inputEl.value);
inputEl.value = 'Hacked!';
console.log(inputEl.value);

const btn = document.querySelector<HTMLButtonElement>('.btn')!;

// **********************************************

/* 
Repetitive functions
const numberIdentity = (item: number): number => item;
const stringIdentity = (item: string): string => item;
const booleanIdentity = (item: boolean): boolean => item;

Bad practice
const badIdentity = (item: any): any => item;
*/

// Generic type
const identity = <Type>(item: Type): Type => item;
identity<number>(7);
identity<string>('seven');
identity<boolean>(true);

const getRandomElement = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
console.log(getRandomElement<number>([1, 2, 3, 4, 5, 6, 7, 8, 9]));
getRandomElement([true, false, false, true, false, true]); // Inferred generic type parameter

// **********************************************

// Generic with multiple types
const merge1 = <T, U>(object1: T, object2: U) => ({ ...object1, ...object2 });
const comboObj1 = merge1({ name: 'colt' }, { favNums: [1, 2, 3, 4, 5, 6] });

// **********************************************

// Adding type constraint
const merge2 = <T extends object, U extends object>(object1: T, object2: U) => ({
  ...object1,
  ...object2,
});

const comboObj2 = merge2({ name: 'colt' }, { favNums: [1, 2, 3, 4, 5, 6] });

// Using type interface
interface Lengthy {
  length: number;
}

const printDoubleLength = <T extends Lengthy>(thing: T): number => thing.length * 2;

// **********************************************

// Without default type parameter, strings type will be `unknown`
const makeEmptyArray = <T = number>(): T[] => [];
const strings = makeEmptyArray();

// **********************************************

// Generic classes
interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();

// **********************************************
