class Student {
    name: string;
    age: number;
    grade: string;
    course: string;

    constructor(name: string, age: number, grade: string, course: string) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.course = course;
    }

    display() {
        console.log("------ Student Details ------");
        console.log("Name       :", this.name);
        console.log("Age        :", this.age);
        console.log("Grade      :", this.grade);
        console.log("Course     :", this.course);
        console.log("-----------------------------");
    }
}

let student1 = new Student("Varad", 20, "A", "Computer Science");
student1.display();