// Generic Type
const names: Array<string> = [];

// Promise Type
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});

promise.then((data) => data.split(''));

/******************************************************************************************************/

// Generic Function
// Generic Constraint using `extends`
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge(
  { rubbish: [{ id: 1, item: 'something' }, { boolean: true }] },
  { age: 30 }
);
console.log(mergeObj);

/******************************************************************************************************/
