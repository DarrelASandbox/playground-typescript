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
