"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Logger1 = (constructor) => console.log(`Logger1:\n\n${constructor}`);
const Logger2 = (log) => (constructor) => console.log(`Logger2:\t${log}\n\n${constructor}`);
const WithTemplate = (template, hookId) => (constructor) => {
    const p = new constructor();
    const hookEL = document.getElementById(hookId);
    if (hookEL) {
        hookEL.innerHTML = template;
        hookEL.querySelector('h1').textContent = p.name;
    }
};
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger1,
    Logger2('logging'),
    WithTemplate('<h1>Person Object (Template)</h1>', 'app')
], Person);
const p1 = new Person();
console.log(p1);
const Log = (target, propertyName) => {
    console.log('Property decorator:');
    console.log(target, propertyName);
};
class Product {
    set price(val) {
        if (val > 0)
            this._price = val;
        throw new Error('Invalid price - should be positive!');
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
