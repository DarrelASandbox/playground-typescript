/******************************************************************************************************/

// Class Decorator
const Logger1 = (constructor: Function) => console.log(`Logger1:\n\n${constructor}`);

// Decorator Factory
const Logger2 = (log: string) => (constructor: Function) =>
  console.log(`Logger2:\t${log}\n\n${constructor}`);

@Logger1
@Logger2('logging')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const p1 = new Person();
console.log(p1);

/******************************************************************************************************/
