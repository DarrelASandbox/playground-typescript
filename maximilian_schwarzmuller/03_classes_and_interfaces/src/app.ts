class Department {
  // name: string; // Field of a class
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
  }

  // Type checking: Tells TypeScript what `this` refers to
  describe(this: Department) {
    console.log(`'Department:  ${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('id1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe();
accounting.printEmployee();

// const accountingCopy = { name: 'Reference to new name', describe: accounting.describe };
// accountingCopy.describe();
