"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// Generic with multiple types
var merge1 = function (object1, object2) { return (__assign(__assign({}, object1), object2)); };
var comboObj1 = merge1({ name: 'colt' }, { favNums: [1, 2, 3, 4, 5, 6] });
// **********************************************
// Adding type constraint
var merge2 = function (object1, object2) { return (__assign(__assign({}, object1), object2)); };
var comboObj2 = merge2({ name: 'colt' }, { favNums: [1, 2, 3, 4, 5, 6] });
var printDoubleLength = function (thing) { return thing.length * 2; };
// **********************************************
// Without default type parameter, strings type will be `unknown`
var makeEmptyArray = function () { return []; };
var strings = makeEmptyArray();
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.add = function (el) {
        this.queue.push(el);
    };
    return Playlist;
}());
var songs = new Playlist();
var videos = new Playlist();
// **********************************************
