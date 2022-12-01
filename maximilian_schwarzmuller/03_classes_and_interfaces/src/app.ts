class Department {
  private employees: string[] = [];
  protected files: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  // Type checking: Tells TypeScript what `this` refers to
  describe(this: Department) {
    console.log(`Department:  ${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployee() {
    console.log('Number of Employees: ' + this.employees.length);
    console.log('Employees List: ' + this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
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

accounting.mostRecentReport = 'New Report';
console.log('mostRecentReport: ' + accounting.mostRecentReport);

const it = new ITDepartment('id2', ['Max']);
it.addEmployee('Mab');

it.describe();
it.printEmployee();
