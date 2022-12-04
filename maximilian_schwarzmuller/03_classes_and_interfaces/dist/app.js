"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        this.files = [];
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
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
    addFiles(file) {
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
const employee1 = Department.createEmployee('Mat');
console.log(`employee1: ${employee1.name} @ fiscalYear ${Department.fiscalYear}`);
accounting.describe();
const it = new ITDepartment('id2', ['Max']);
it.addEmployee('Mab');
it.describe();
it.printEmployee();
