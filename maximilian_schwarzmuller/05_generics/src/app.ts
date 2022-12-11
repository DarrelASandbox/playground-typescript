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

interface Length {
  length: number;
}

function countAndDescribe<T extends Length>(element: T): [T, string] {
  let description = 'Got no value';
  if (element.length > 0) description = 'Got 1 element.';
  else if (element.length > 1) description = 'Got ' + element.length + ' elements.';
  return [element, description];
}

console.log(countAndDescribe('Hi, there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));

/******************************************************************************************************/
