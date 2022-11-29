class Department {
  name: string; // Field of a class
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  // Type checking: Tells TypeScript what `this` refers to
  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployee();

// const accountingCopy = { name: 'Reference to new name', describe: accounting.describe };
// accountingCopy.describe();
