import _ from 'lodash';

const add = (x: number, y: number): number => _.add(x, y);
const divide = (x: number, y: number): number => x / y;
const multiply = (x: number, y: number): number => x * y;

export { add, divide, multiply };
