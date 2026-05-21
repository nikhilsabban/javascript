// 10.  Create an Employee class with properties like employee name and 
// salary. Use a control statement to check if the salary is greater than a 
// certain amount and print "High Salary" or "Low Salary".

class Employee{
    name:string;
    salary:number;

    constructor(name:string,salary:number)
    {
        this.name=name;
        this.salary=salary;
    }

    checkSalary()
    {
        if(this.salary >= 50000)
        {
            alert("High Salary");
        }
        else{
            alert("Low Salary");
        }
    }
}

let empname = prompt("Enter Your Name: ")||"";
let salary= Number(prompt("Enter Your Salary: "));

let emp = new Employee(empname,salary);

emp.checkSalary();