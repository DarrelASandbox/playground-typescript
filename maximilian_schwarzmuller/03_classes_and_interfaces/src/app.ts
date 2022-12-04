abstract class Department {
  static fiscalYear = 2020;
  private employees: string[] = [];
  protected files: string[] = [];

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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    else throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error('No value found');
    else this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
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

  addFiles(file: string) {
    this.files.push(file);
  }

  printFiles() {
    console.log('Accounting Files: ' + this.files);
  }
}

const accounting = new AccountingDepartment('id1', ['Financial']);
accounting.addEmployee('Max');
accounting.addEmployee('Mad');
accounting.addReport('404');

accounting.describe();
accounting.printEmployee();
accounting.printReports();

accounting.addFiles('Super Top Secret Company Address');
accounting.printFiles();

// Getters & Setters
accounting.mostRecentReport = 'New Report';
console.log('mostRecentReport: ' + accounting.mostRecentReport);

// Static Methods & Properties
const employee1 = Department.createEmployee('Mat');
console.log(`employee1: ${employee1.name} @ fiscalYear ${Department.fiscalYear}`);

// Method override
accounting.describe();

const it = new ITDepartment('id2', ['Max']);
it.addEmployee('Mab');

it.describe();
it.printEmployee();
