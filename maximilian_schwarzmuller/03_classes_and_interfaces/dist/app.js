"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log('Number of Employees: ' + this.employees.length);
        console.log('Employees List: ' + this.employees);
    }
}
Department.fiscalYear = 2020;
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        else
            throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('No value found');
        else
            this.addReport(value);
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment.instance)
            return this.instance;
        return new AccountingDepartment('1000', []);
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log('Accounting Reports: ' + this.reports);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
console.log('********** Accounting Department **********');
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee('Mad');
accounting.addEmployee('Max');
accounting.addReport('404 Error Report');
accounting.describe();
accounting.printEmployee();
accounting.printReports();
accounting.mostRecentReport = 'New Report';
console.log('mostRecentReport: ' + accounting.mostRecentReport);
const employee1 = Department.createEmployee('Mat');
console.log(`employee1: ${employee1.name} @ fiscalYear ${Department.fiscalYear}`);
console.log('\n********** IT Department **********');
const it = new ITDepartment('2000', ['Fat']);
it.addEmployee('Mab');
it.describe();
it.printEmployee();
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name, age, skills) {
        this.name = name;
        this.age = age;
        if (skills)
            this.skills = skills;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}!`);
    }
}
const user1 = new Person('Max', 30);
user1.greet('Howdy, this is');
