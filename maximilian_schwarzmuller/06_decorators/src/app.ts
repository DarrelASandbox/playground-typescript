/******************************************************************************************************/

// Class Decorator
const Logger1 = (constructor: Function) => console.log(`Logger1:\n\n${constructor}`);

// Decorator Factory
const Logger2 = (log: string) => (constructor: Function) =>
  console.log(`Logger2:\t${log}\n\n${constructor}`);

// Angular framework provides a lot of built-in decorators which are handy for developers
// This pattern is, for example, used in Angular.
// There we only write our component logic in a TS class,
// and instead of the need of inheriting from a Component class (like for example in React's class based components),
// we simply write an @Component() decorator which takes the associated HTML template, CSS and selector as parameters.
const WithTemplate =
  <T extends { new (...args: any[]): { name: string } }>(
    template: string,
    hookId: string
  ) =>
  (originalConstructor: T) => {
    console.log('TEMPLATE FACTORY');
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();
        const hookEL = document.getElementById(hookId);
        if (hookEL) {
          hookEL.innerHTML = template;
          hookEL.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };

@Logger1
@Logger2('logging')
@WithTemplate('<h1>Person Object (Template)</h1>', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

// const p1 = new Person();
// console.log(p1);

/******************************************************************************************************/

// Property Decorator
const Log = (target: any, propertyName: string | Symbol) => {
  console.log('Property decorator:');
  console.log(target, propertyName);
};

// Accessor Decorator
const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Accessor decorator:');
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

// Method Decorator
const Log3 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor) => {
  console.log('Method decorator:');
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

// Parameter Decorator
const Log4 = (target: any, name: string | Symbol, position: number) => {
  console.log('Parameter decorator:');
  console.log(target);
  console.log(name);
  console.log(position);
};

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) this._price = val;
    throw new Error('Invalid price - should be positive!');
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

/******************************************************************************************************/
