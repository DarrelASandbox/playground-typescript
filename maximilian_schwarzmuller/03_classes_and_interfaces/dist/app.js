"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department:  ${this.id} ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log('Number of Employees: ' + this.employees.length);
        console.log('Employees List: ' + this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addReport(text) {
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
