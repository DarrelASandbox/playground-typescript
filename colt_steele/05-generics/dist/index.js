"use strict";
var nums = [];
var colors = [];
// Built-in generics
var inputEl = document.querySelector('#username');
console.log(inputEl.value);
inputEl.value = 'Hacked!';
console.log(inputEl.value);
var btn = document.querySelector('.btn');
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
var identity = function (item) { return item; };
identity(7);
identity('seven');
identity(true);
var getRandomElement = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };
console.log(getRandomElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));
getRandomElement([true, false, false, true, false, true]); // Inferred generic type parameter
// **********************************************
