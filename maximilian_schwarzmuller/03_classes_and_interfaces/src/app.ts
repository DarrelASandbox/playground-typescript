class Department {
  private employees: string[] = [];

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
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log('Accounting Reports: ' + this.reports);
  }
}

const accounting = new AccountingDepartment('id1', ['Financial']);
accounting.addEmployee('Max');
accounting.addEmployee('Mad');
accounting.addReport('404');

accounting.describe();
accounting.printEmployee();
accounting.printReports();

const it = new ITDepartment('id2', ['Max']);
it.addEmployee('Mab');

it.describe();
it.printEmployee();
