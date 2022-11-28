class Department {
  name: string; // Field of a class

  constructor(n: string) {
    this.name = n;
  }

  // Type checking: Tells TypeScript what `this` refers to
  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');
const accountingCopy = { name: 'Reference to new name', describe: accounting.describe };

accounting.describe();
accountingCopy.describe();
