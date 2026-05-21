"use strict";
class Employee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    checkSalary() {
        if (this.salary >= 50000) {
            alert("High Salary");
        }
        else {
            alert("Low Salary");
        }
    }
}
let empname = prompt("Enter Your Name: ") || "";
let salary = Number(prompt("Enter Your Salary: "));
let emp = new Employee(empname, salary);
emp.checkSalary();
