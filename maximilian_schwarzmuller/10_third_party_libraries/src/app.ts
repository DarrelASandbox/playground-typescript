// There are many @types/package out there
import _ from 'lodash';

// If there are no package with types support
declare let GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));
console.log(GLOBAL);

/* ************************************************** */

import 'reflect-metadata';
import { plainToClass } from 'class-transformer';

import { Product } from './product.model';

const p1 = new Product('A Book', 12.99);
console.log(p1.getInformation());

const products = [
  { title: 'A Carpet', price: 29.99 },
  { title: 'A Book', price: 10.99 },
];

const loadedProducts = products.map((prod) => new Product(prod.title, prod.price));
const loadedProducts2 = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

for (const prod of loadedProducts2) {
  console.log(prod.getInformation());
}

/* ************************************************** */

import { validate } from 'class-validator';

const p2 = new Product('', -5.99);
validate(p2).then((error) => {
  if (error) console.log('Validation error');
  else console.log(p2.getInformation());
});

/* ************************************************** */
