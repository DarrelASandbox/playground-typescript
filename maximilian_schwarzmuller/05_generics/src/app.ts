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

console.log('mergeObj:');
console.log(mergeObj);

/******************************************************************************************************/

// Another Generic Function
interface Length {
  length: number;
}

function countAndDescribe<T extends Length>(element: T): [T, string] {
  let description = 'Got no value';
  if (element.length > 0) description = 'Got 1 element.';
  else if (element.length > 1) description = 'Got ' + element.length + ' elements.';
  return [element, description];
}

console.log('countAndDescribe: ' + countAndDescribe('Hi, there!'));
console.log('countAndDescribe: ' + countAndDescribe(['Sports', 'Cooking']));

/******************************************************************************************************/

// keyof Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

console.log('extractAndConvert: ' + extractAndConvert({ name: 'Max' }, 'name'));

/******************************************************************************************************/

// Generic Class
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    // workaround to prevent removing of wrong item
    // but we cannot `objStorage.removeItem({ name: 'Mad' });`
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Mad');
textStorage.addItem('Max');
textStorage.removeItem('Mad');
console.log('textStorage: ' + textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
objStorage.addItem({ name: 'Mad' });
objStorage.addItem({ name: 'Max' });

// Removed Max instead of Mad, because there are 2 different `{name: 'Mad'}`
// technically `removeItem({ name: 'Mad' })` is a new object in memory
// indexOf will look for the address and not find it
// so it will remove the last element of the array instead
objStorage.removeItem({ name: 'Mad' });

console.log('objStorage:');
console.log(objStorage.getItems());

/******************************************************************************************************/
