abstract class Department {
  static fiscalYear = 2020;
  private employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  // Abstract Classes
  abstract describe(): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  // Type checking: Tells TypeScript what `this` refers to
  printEmployee(this: Department) {
    console.log('Number of Employees: ' + this.employees.length);
    console.log('Employees List: ' + this.employees);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    else throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('No value found');
    else this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance;
    return new AccountingDepartment('1000', []);
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log('Accounting Reports: ' + this.reports);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

console.log('********** Accounting Department **********');
// Singletons & Private Constructors
// Or use Object Literal
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee('Mad');
accounting.addEmployee('Max');
accounting.addReport('404 Error Report');

accounting.describe();
accounting.printEmployee();
accounting.printReports();

// Getters & Setters
accounting.mostRecentReport = 'New Report';
console.log('mostRecentReport: ' + accounting.mostRecentReport);

// Static Methods & Properties
const employee1 = Department.createEmployee('Mat');
console.log(`employee1: ${employee1.name} @ fiscalYear ${Department.fiscalYear}`);

console.log('\n********** IT Department **********');
const it = new ITDepartment('2000', ['Fat']);
it.addEmployee('Mab');

// Method override
it.describe();
it.printEmployee();

interface Greetings {
  greet(phrase: string): void;
}

interface Character {
  name: string;
  age: number;
}

class Person implements Greetings, Character {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}!`);
  }
}

const user1 = new Person('Max', 30);
user1.greet('Howdy, this is');
