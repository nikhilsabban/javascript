// 9.  Develop a TypeScript class for Student Result that stores marks and 
// calculates the grade using if-else or switch control statements.

class Student{

    marks:number;

    constructor(marks:number){
        this.marks=marks;
    }

    calculate()
    {
        if(this.marks >= 75)
        {
            alert("Grade A");
        }
        else if(this.marks >= 50)
        {
            alert("Grade B")
        }
        else
        {
            alert("Grade C")
        }
    }
}

let marks = Number(prompt("Enter Marks: "));

let s=new Student(marks);

s.calculate()