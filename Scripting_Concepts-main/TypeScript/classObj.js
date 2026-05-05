var Student = /** @class */ (function () {
    function Student(name, age, grade, course) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.course = course;
    }
    Student.prototype.display = function () {
        console.log("------ Student Details ------");
        console.log("Name       :", this.name);
        console.log("Age        :", this.age);
        console.log("Grade      :", this.grade);
        console.log("Course     :", this.course);
        console.log("-----------------------------");
    };
    return Student;
}());
var student1 = new Student("Varad", 20, "A", "Computer Science");
student1.display();
