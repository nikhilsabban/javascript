"use strict";
// 12. Create a Student class in TypeScript that stores student name and marks 
// of three subjects. Use if-else control statements to determine whether the 
// student has passed or failed and display the result. 
class Student {
    name;
    m1;
    m2;
    m3;
    constructor(name, m1, m2, m3) {
        this.name = name;
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
    }
    checkResult() {
        let total = this.m1 + this.m2 + this.m3;
        let average = total / 3;
        if (average >= 35) {
            alert(this.name + " is passed");
        }
        else {
            alert(this.name + " is failed");
        }
    }
}
let s1name = prompt("Enter name of student:") || "";
let mark1 = Number(prompt("Enter mark 1:"));
let mark2 = Number(prompt("Enter mark 2:"));
let mark3 = Number(prompt("Enter mark 3:"));
let ob1 = new Student(s1name, mark1, mark2, mark3);
ob1.checkResult();
