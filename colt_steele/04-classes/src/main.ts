// annotating classes
class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number = 0,
    readonly readme: string = 'This a new player.'
  ) {}

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  // use underscore so there is no conflict with getter `score`
  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) throw new Error('Score cannot be negative.');
    this._score = newScore;
  }
}

class Admin extends Player {
  private isAdmin: boolean = true;

  maxScore() {
    this._score = 99999;
  }

  get status(): boolean {
    return this.isAdmin;
  }
}

const elton = new Player('Elton', 'Steele');
const elton2 = new Admin('Elton', 'Admin');
console.log(elton.fullName);
console.log(elton.score);
console.log(`${elton2.fullName} isAdmin: ${elton2.status}`);

// **********************************************
// ************ Classes & Interfaces ************
// **********************************************

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public model: string, public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(`This ${this.brand} jacket is ${this.color} in color.`);
  }
}

const bike1 = new Bike('B001', 'red');
const jacket1 = new Jacket('Prada', 'black');
jacket1.print();

// **********************************************
// ****************** Abstract ******************
// **********************************************

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
  constructor(public first: string, public last: string, private salary: number) {
    super(first, last);
  }

  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    public first: string,
    public last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee('Betty', 'White', 95000);
const bill = new PartTimeEmployee('Bill', 'Buck', 24, 11000);
console.log(betty.getPay());
console.log(bill.getPay());
